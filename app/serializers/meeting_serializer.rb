class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :scheduled_date, :staff_name, :staff_id
  
  has_many :notes
end
