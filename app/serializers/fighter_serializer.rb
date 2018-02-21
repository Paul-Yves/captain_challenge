class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :max_life, :life, :ability, :strength
end
