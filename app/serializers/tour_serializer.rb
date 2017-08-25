class TourSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :creator, :created_at
  has_many :tour_points
end
