class CreatePorts < ActiveRecord::Migration[5.1]
  def change
    create_table :ports do |t|
      t.string :port_number
      t.string :border
      t.string :port_name
      t.string :crossing_name
      t.string :hours

      t.timestamps
    end
  end
end
