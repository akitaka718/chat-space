class Group < ApplicationRecord
  has many :messages
  has many :members
  has many :users,through: :members
end
