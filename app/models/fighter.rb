class Fighter < ApplicationRecord
  before_create :reset_current_life
  validate :creation_valid, on: :create

  has_many :victories, class_name: 'Fight', foreign_key: 'winner_id'
  has_many :losses, class_name: 'Fight', foreign_key: 'looser_id'

  attr_accessor :equipment # the list of equipment is not persisted since it's only for one fight

  def reset_current_life
    self.life = self.max_life
  end

  def attack_works
    rand(100) < self.ability
  end

  # a fighter has two hands and one body, he can't carry more weapons/armor
  def can_handle_equipment
    hand = self.equipment.inject(0){|sum, eq| sum + eq.hand_slot}
    body = self.equipment.inject(0){|sum, eq| sum + eq.body_slot}
    hand <= 2 && body <= 1
  end

  private

  def creation_valid
    unless self.max_life == 12 && self.ability + self.strength + self.speed <= 115
      errors.add(:base, 'invalid caracs for fighter creation')
    end
  end

end
