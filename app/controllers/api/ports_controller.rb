class Api::PortsController < ApplicationController
  before_action :set_port, only: [:show]

  def index
    render json: Port.all
  end

  def show
    render json: @port.statuses.last
  end


  private

  def set_port
    @port = Port.find_by(id: params[:id])
  end
end