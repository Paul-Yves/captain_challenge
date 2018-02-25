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

ActiveRecord::Schema.define(version: 20180225163009) do

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.integer "hand_slot", default: 0, null: false
    t.integer "body_slot", default: 0, null: false
    t.integer "strength", default: 0, null: false
    t.integer "ability", default: 0, null: false
    t.integer "dodge", default: 0, null: false
    t.integer "speed", default: 0, null: false
    t.integer "toughness", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fighters", force: :cascade do |t|
    t.string "name"
    t.integer "max_life"
    t.integer "life"
    t.integer "strength"
    t.integer "ability"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "speed"
    t.index ["name"], name: "index_fighters_on_name", unique: true
  end

  create_table "fights", force: :cascade do |t|
    t.integer "winner_id"
    t.integer "looser_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "win_equipment"
    t.string "loose_equipment"
    t.index ["looser_id"], name: "index_fights_on_looser_id"
    t.index ["winner_id"], name: "index_fights_on_winner_id"
  end

end
