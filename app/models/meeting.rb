class Meeting < ApplicationRecord
  belongs_to :user
  belongs_to :employee
  has_many :notes, dependent: :destroy

  validates :title, presence: true
  validates :scheduled_date, presence: true


  def staff_name
    self.employee.name
  end 


  # Might not need the ID for supervision page / Review to delete
  def staff_id
    self.employee.id
  end 
  
end
