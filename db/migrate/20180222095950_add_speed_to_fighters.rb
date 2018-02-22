class AddSpeedToFighters < ActiveRecord::Migration[5.1]
  def change
    add_column :fighters, :speed, :integer
  end
end
