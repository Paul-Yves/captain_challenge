class FighterController < ApplicationController
  def index
    render json: Fighter.all
  end

  def create
    new_fighter = Fighter.create!(fighter_params)
    render json: new_fighter, status: 200
  end

  def update
    fighter = Fighter.find(params[:fighter_id])
    return render json: {error: "could not find fighter #{params[:fighter_id]}"}, status: 404 unless fighter
    fighter.update!(fighter_params)
    render json: fighter, status: 200
  end

  def delete
    fighter = Fighter.find(params[:fighter_id])
    return render json: {error: "could not find fighter #{params[:fighter_id]}"}, status: 404 unless fighter
    fighter.destroy! if fighter
    render json: {}, status: 204
  end

  private

  def fighter_params
    params.require(:fighter).permit(:name, :strength, :ability, :speed, :max_life)
  end
end
