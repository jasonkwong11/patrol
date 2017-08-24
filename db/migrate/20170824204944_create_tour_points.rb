class CreateTourPoints < ActiveRecord::Migration[5.1]
  def change
    create_table :tour_points do |t|
      t.string :location
      t.string :description
      t.string :problem_descriptions
      t.references :tour
    end
  end
end
