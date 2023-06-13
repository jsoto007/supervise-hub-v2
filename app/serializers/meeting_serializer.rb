class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :scheduled_date, :staff_name
  
  has_many :notes
end
