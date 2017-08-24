class CreateTours < ActiveRecord::Migration[5.1]
  def change
    create_table :tours do |t|
      t.string :title
      t.string :description
      t.string :creator

      t.timestamps
    end
  end
end
