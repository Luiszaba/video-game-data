class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: {case_sensitive: false}, presence: true
  validates :firstname, :lastname, presence: true

  has_many :wishlist_games
  has_many :games, through: :wishlist_games
end
