class Tour < ApplicationRecord
  has_many :tour_points
  has_many :tasks, through: :tour_points
end
