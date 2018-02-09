class PortSerializer < ActiveModel::Serializer
  attributes :id, :port_number, :border, :port_name, :crossing_name, :hours
end
