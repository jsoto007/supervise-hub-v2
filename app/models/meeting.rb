class Meeting < ApplicationRecord
  belongs_to :user
  belongs_to :employee
  has_many :notes

  #considering delete/ not using now. 
  def staff_name
    self.employee.name
  end 
  
end
