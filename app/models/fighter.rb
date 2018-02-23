class Fighter < ApplicationRecord
  before_create :reset_current_life
  validate :creation_valid, on: :create

  has_many :victories, class_name: 'Fight', foreign_key: 'winner_id'
  has_many :losses, class_name: 'Fight', foreign_key: 'looser_id'

  def reset_current_life
    self.life = self.max_life
  end

  def attack_works
    rand(100) < self.ability
  end

  private

  def creation_valid
    self.max_life == 12 && self.ability + self.strength + self.speed <= 115
  end

end
