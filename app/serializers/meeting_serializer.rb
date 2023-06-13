class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :scheduled_date, :staff_name, :staff_id
  
  belongs_to :employee

end
