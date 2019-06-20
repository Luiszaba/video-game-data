class Game < ApplicationRecord
  has_many :wishlist_games
  has_many :users, through: :wishlist_games
end
