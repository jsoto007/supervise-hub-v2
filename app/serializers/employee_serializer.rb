class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :meetings
  has_many :notes

end
