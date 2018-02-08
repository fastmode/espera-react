class Api::PortsController < ApplicationController

  def index
    render json: Port.all
  end

  def show
    render json: Port.find_by(id: params[:id])
  end
end