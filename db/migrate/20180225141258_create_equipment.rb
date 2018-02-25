class CreateEquipment < ActiveRecord::Migration[5.1]
  def change
    create_table :equipment do |t|
      t.string :name
      t.integer :hand_slot, null: false, default: 0
      t.integer :body_slot, null: false, default: 0
      t.integer :strength, null: false, default: 0
      t.integer :ability, null: false, default: 0
      t.integer :dodge, null: false, default: 0
      t.integer :speed, null: false, default: 0
      t.integer :toughness, null: false, default: 0

      t.timestamps
    end
  end
end
