class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :rating, :category, :age_rating, :cover, :player_perspective, :slug, :storyline, :summary, :url, :video, :platform, :year
end
