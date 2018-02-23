class CreateFights < ActiveRecord::Migration[5.1]
  def change
    create_table :fights do |t|
      t.references :winner, index: true, foreign_key: { to_table: :fighters }
      t.references :looser, index: true, foreign_key: { to_table: :fighters }

      t.timestamps
    end
  end
end
