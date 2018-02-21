class CreateFighters < ActiveRecord::Migration[5.1]
  def change
    create_table :fighters do |t|
      t.string :name
      t.integer :max_life
      t.integer :life
      t.integer :strength
      t.integer :ability

      t.timestamps
    end
    add_index :fighters, :name, unique: true
  end
end
