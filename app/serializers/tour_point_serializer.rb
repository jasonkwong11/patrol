class TourPointSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :problem_descriptions, :resolved_tasks
  belongs_to :tour
  has_many :tasks
end
