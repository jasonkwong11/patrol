class ToursController < ApplicationController
  
  # GET /tours
  def index
    @tours = Tour.all
    render json: @tours
  end
end