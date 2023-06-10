class Meeting < ApplicationRecord
  belongs_to :user
  belongs_to :employee
  has_many :notes
  
end
