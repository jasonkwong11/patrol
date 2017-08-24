class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.boolean :resolved, null: false, default: false
      t.boolean :seen, null: false, default: false
      t.string :problem_description
      t.datetime :resolved_at
      t.references :tour_point

      t.timestamps
    end
  end
end
