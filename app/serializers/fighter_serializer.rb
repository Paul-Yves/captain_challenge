class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :max_life, :ability, :strength, :speed
end
