class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :rating
      t.datetime :release_date
      t.string :category
      t.integer :age_rating
      t.string :cover
      t.string :player_perspective
      t.string :slug
      t.string :stoyline
      t.string :summary
      t.string :url
      t.string :video
      t.timestamps
    end
  end
end
