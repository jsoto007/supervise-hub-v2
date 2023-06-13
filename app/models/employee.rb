class Employee < ApplicationRecord
  has_many :meetings
  has_many :users, through: :meetings
  has_many :notes, through: :meetings
  
end
