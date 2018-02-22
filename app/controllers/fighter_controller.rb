class FighterController < ApplicationController
  def index
    render json: Fighter.all
  end
end
