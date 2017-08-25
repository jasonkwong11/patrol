class TourSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :creator
  has_many :tour_points
end
