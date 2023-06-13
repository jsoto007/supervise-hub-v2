class Meeting < ApplicationRecord
  belongs_to :user
  belongs_to :employee
  has_many :notes

  def staff_name
    self.employee.name
  end 

  def meeting_notes
    self.notes
  end 
  
end
