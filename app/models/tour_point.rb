class TourPoint < ApplicationRecord
  attr_accessor :resolved_tasks

  belongs_to :tour
  has_many :tasks

  def resolved_tasks
    self.tasks.where(resolved: true)
  end
end
