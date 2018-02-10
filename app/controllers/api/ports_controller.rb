class Api::PortsController < ApplicationController
  before_action :set_port, only: [:show]

  def index
    render json: Port.all
  end

  def show
    render json: @port.statuses.last
  end

  def canada
    @canada = Port.all.canada
    render json: @canada
  end

  def mexico
    @mexico = Port.all.mexico
    render json: @mexico
  end


  private

  def set_port
    @port = Port.find_by(id: params[:id])
  end
end