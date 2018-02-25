class FightSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :winner, :looser, :win_equipment, :loose_equipment

  def winner
    object.winner.name
  end
  def looser
    object.looser.name
  end
end
