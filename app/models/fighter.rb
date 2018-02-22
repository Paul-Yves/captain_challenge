class Fighter < ApplicationRecord
  before_create :reset_current_life
  validate :creation_valid, on: :create

  def reset_current_life
    self.life = self.max_life
  end

  private

  def creation_valid
    self.max_life == 12 && self.ability + self.strength + self.speed <= 115
  end

end
