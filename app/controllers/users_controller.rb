class UsersController < ApplicationController

  skip_before_action :authorized, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end 

  def show 
    current_user = find_user
    render json: current_user 
  end 

  def index
    current_user = find_user
    render json: current_user
  end

  private

  def user_params
    params.permit(:username, :password, :email)
  end 

  def find_user
    User.find_by(id: session[:user_id])
  end 


end


