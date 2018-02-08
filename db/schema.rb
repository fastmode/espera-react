# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180208153332) do

  create_table "ports", force: :cascade do |t|
    t.string "port_number"
    t.string "border"
    t.string "port_name"
    t.string "crossing_name"
    t.string "hours"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "statuses", force: :cascade do |t|
    t.string "date"
    t.string "port_status"
    t.string "comm_max_lanes"
    t.string "comm_standard_update_time"
    t.string "comm_standard_operational_status"
    t.string "comm_standard_delay_minutes"
    t.string "comm_standard_lanes_open"
    t.string "comm_fast_operational_status"
    t.string "comm_fast_update_time"
    t.string "comm_fast_delay_minutes"
    t.string "comm_fast_lanes_open"
    t.string "pass_max_lanes"
    t.string "pass_standard_update_time"
    t.string "pass_standard_operational_status"
    t.string "pass_standard_delay_minutes"
    t.string "pass_standard_lanes_open"
    t.string "pass_sentri_update_time"
    t.string "pass_sentri_operational_status"
    t.string "pass_sentri_delay_minutes"
    t.string "pass_sentri_lanes_open"
    t.string "pass_ready_update_time"
    t.string "pass_ready_operational_status"
    t.string "pass_ready_delay_minutes"
    t.string "pass_ready_lanes_open"
    t.string "ped_max_lanes"
    t.string "ped_standard_update_time"
    t.string "ped_standard_operational_status"
    t.string "ped_standard_delay_minutes"
    t.string "ped_standard_lanes_open"
    t.string "ped_ready_update_time"
    t.string "ped_ready_operational_status"
    t.string "ped_ready_delay_minutes"
    t.string "ped_ready_lanes_open"
    t.integer "port_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
