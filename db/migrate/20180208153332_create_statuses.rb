class CreateStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :statuses do |t|
      t.string :date
      t.string :port_status
      t.string :comm_max_lanes
      t.string :comm_standard_update_time
      t.string :comm_standard_operational_status
      t.string :comm_standard_delay_minutes
      t.string :comm_standard_lanes_open
      t.string :comm_fast_operational_status
      t.string :comm_fast_update_time
      t.string :comm_fast_delay_minutes
      t.string :comm_fast_lanes_open
      t.string :pass_max_lanes
      t.string :pass_standard_update_time
      t.string :pass_standard_operational_status
      t.string :pass_standard_delay_minutes
      t.string :pass_standard_lanes_open
      t.string :pass_sentri_update_time
      t.string :pass_sentri_operational_status
      t.string :pass_sentri_delay_minutes
      t.string :pass_sentri_lanes_open
      t.string :pass_ready_update_time
      t.string :pass_ready_operational_status
      t.string :pass_ready_delay_minutes
      t.string :pass_ready_lanes_open
      t.string :ped_max_lanes
      t.string :ped_standard_update_time
      t.string :ped_standard_operational_status
      t.string :ped_standard_delay_minutes
      t.string :ped_standard_lanes_open
      t.string :ped_ready_update_time
      t.string :ped_ready_operational_status
      t.string :ped_ready_delay_minutes
      t.string :ped_ready_lanes_open

      t.integer :port_id
      
      t.timestamps
    end
  end
end
