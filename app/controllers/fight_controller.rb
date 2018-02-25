class FightController < ApplicationController

  def index
    render json: Fight.includes(:winner, :looser).order(created_at: :desc).all
  end

  def create
    par = fight_params
    fighters = par.map{|fighter| Fighter.find(fighter[:id])}
    if fighters.size != 2
      return render json: {error: 'no two fighters'}, status: 400
    end
    winner = FightService.new(fighters).perform
    render json: {winner: winner}
  end

  private

  def fight_params
    params.require(:fighters).map{|fighter| fighter.permit(:id, :weapon)}
  end
end