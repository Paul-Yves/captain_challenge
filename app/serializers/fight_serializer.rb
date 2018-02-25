class FightSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :winner, :looser

  def winner
    object.winner.name
  end
  def looser
    object.looser.name
  end
end
