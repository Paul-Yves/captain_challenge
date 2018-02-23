class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :max_life, :ability, :strength, :speed, :victories, :losses

  def victories
    object.victories.count
  end
  def losses
    object.losses.count
  end
end
