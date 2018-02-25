class AddEquipmentToFights < ActiveRecord::Migration[5.1]
  def change
    add_column :fights, :win_equipment, :string
    add_column :fights, :loose_equipment, :string
  end
end
