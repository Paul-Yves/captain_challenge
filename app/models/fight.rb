class Fight < ApplicationRecord
  belongs_to :winner, class_name: 'Fighter'
  belongs_to :looser, class_name: 'Fighter'
end
