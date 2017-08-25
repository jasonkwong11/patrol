class TaskSerializer < ActiveModel::Serializer
  attributes :id, :problem_description, :resolved_at, :resolved
  belongs_to :tour_point
end
