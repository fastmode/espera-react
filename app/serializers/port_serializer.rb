class PortSerializer < ActiveModel::Serializer
  attributes :id, :hours, :port_number, :border, :port_name, :crossing_name
  has_many :statuses
end
