class TourPoint < ApplicationRecord
  belongs_to :tour
  has_many :tasks
end
