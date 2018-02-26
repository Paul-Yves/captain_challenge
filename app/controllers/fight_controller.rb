class FightController < ApplicationController

  def index
    render json: Fight.includes(:winner, :looser).order(created_at: :desc).all
  end

  def create
    fighters = fight_params.map do |data|
      fighter = Fighter.find(data[:id])
      equipments = (data[:equipment] || []).map{|eq| Equipment.find(eq)}
      fighter.equipments = equipments
      fighter
    end
    if fighters.size != 2
      return render json: {error: 'no two fighters'}, status: 400
    end
    unless fighters[0].can_handle_equipment && fighters[1].can_handle_equipment
      return render json: {error: 'improper equipment for one of the fighters'}, status: 400
    end
    winner = FightService.new(fighters).perform
    render json: {winner: winner}
  end

  private

  def fight_params
    params.require(:fighters).map{|fighter| fighter.permit(:id, equipment: [])}
  end
end