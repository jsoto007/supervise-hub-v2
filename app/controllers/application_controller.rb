class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized

  def authorized
    return render json:{error: "Not Authorized" }, status: unauthorized unless session.include? :user_id
  end 


  
  private

  # def find_user
  #   user = User.find_by(id: session[:user_id])
  # end 
  
end
