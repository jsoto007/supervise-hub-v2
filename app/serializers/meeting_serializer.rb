class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :scheduled_date, :staff_name

  belongs_to :employee
end
