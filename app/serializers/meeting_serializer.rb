class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :scheduled_date, :staff_name, :staff_id, :formated_date
  
  belongs_to :employee
  has_many :notes
end
