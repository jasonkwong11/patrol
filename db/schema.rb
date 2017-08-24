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

ActiveRecord::Schema.define(version: 20170824204956) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tasks", force: :cascade do |t|
    t.boolean "resolved", default: false, null: false
    t.boolean "seen", default: false, null: false
    t.string "problem_description"
    t.datetime "resolved_at"
    t.bigint "tour_point_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tour_point_id"], name: "index_tasks_on_tour_point_id"
  end

  create_table "tour_points", force: :cascade do |t|
    t.string "location"
    t.string "description"
    t.string "problem_descriptions"
    t.bigint "tour_id"
    t.index ["tour_id"], name: "index_tour_points_on_tour_id"
  end

  create_table "tours", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "creator"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
