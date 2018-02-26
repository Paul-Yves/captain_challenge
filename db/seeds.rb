# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '##### Seeding fighters'
Fighter.create!(name: 'Captain Jack Sparrow', max_life: 12, ability: 45, strength: 35, speed: 35)
Fighter.create!(name: 'Captain America', max_life: 12, ability: 40, strength: 40, speed: 35)
contrat = Fighter.create!(name: 'Captain Contrat', max_life: 12, ability: 30, strength: 30, speed: 30)
contrat.update!(max_life: 15, ability: 60, strength: 60, speed: 60)

puts '##### Seeding equipment'
Equipment.create!(name: 'sword', hand_slot: 1, ability: 10, strength: 10)
Equipment.create!(name: 'axe', hand_slot: 1, ability: 5, strength: 15)
Equipment.create!(name: 'small shield', hand_slot: 1, dodge: 10, strength: 10)
Equipment.create!(name: 'shield', hand_slot: 1, dodge: 20)
Equipment.create!(name: 'large shield', hand_slot: 1, dodge: 30, speed: -10)
Equipment.create!(name: 'dagger', hand_slot: 1, ability: 10, dodge: 5, speed: 5)
Equipment.create!(name: 'spear', hand_slot: 2, strength: 10, dodge: 5, speed: 20)
Equipment.create!(name: 'two handed sword', hand_slot: 2, strength: 15, speed: -10)
Equipment.create!(name: 'two handed axe', hand_slot: 2, strength: 25, speed: -15)
Equipment.create!(name: 'plate armor', body_slot: 1, toughness: 40, speed: -15)
Equipment.create!(name: 'medium armor', body_slot: 1, toughness: 20, speed: -5)
Equipment.create!(name: 'leather armor', body_slot: 1, toughness: 10, dodge: 5)