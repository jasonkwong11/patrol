class ToursController < ApplicationController
  before_action :set_tour, only: :show

  def index
    @tours = Tour.all
    render json: @tours
  end

  def show
    render json: @tour
  end

  private

    def set_tour
      @tour = Tour.find(params[:id])
    end
end