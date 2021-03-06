class Fighter < ApplicationRecord
  before_create :reset_current_life
  validate :creation_valid, on: :create

  has_many :victories, class_name: 'Fight', foreign_key: 'winner_id', dependent: :delete_all
  has_many :losses, class_name: 'Fight', foreign_key: 'looser_id', dependent: :delete_all

  attr_accessor :equipments # the list of equipment is not persisted since it's only for one fight

  def reset_current_life
    self.life = self.max_life
  end

  # check fighter total ability against enemy dodge, has a minimum of 10% chance to hit
  def attack_works(enemy_dodge)
    rand(100) <  [self.equipments.inject(self.ability){|sum, eq| sum + eq.ability} - enemy_dodge, 10].max
  end

  def equipments
    @equipments || []
  end

  # a fighter has two hands and one body, he can't carry more weapons/armor
  def can_handle_equipment
    hand = self.equipments.inject(0){|sum, eq| sum + eq.hand_slot}
    body = self.equipments.inject(0){|sum, eq| sum + eq.body_slot}
    hand <= 2 && body <= 1
  end

  def strength_modifier
    self.equipments.inject(0){|sum, eq| sum + eq.strength}
  end
  def toughness
    self.equipments.inject(0){|sum, eq| sum + eq.toughness}
  end
  def dodge_modifier
    self.equipments.inject(0){|sum, eq| sum + eq.dodge}
  end
  def total_speed
     self.equipments.inject(self.speed){|sum, eq| sum + eq.speed}
  end

  private

  def creation_valid
    unless self.max_life == 12 && self.ability + self.strength + self.speed <= 115
      errors.add(:base, 'invalid caracs for fighter creation')
    end
  end

end
