class User < ApplicationRecord
  has_many :meetings
  has_many :employees, through: :meetings


  validates :username, presence: true, :uniqueness => true
  validates :password, presence: true
  validates :email, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  has_secure_password
end
