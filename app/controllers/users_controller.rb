class UsersController < ApplicationController

  skip_before_action :authorized, only: :create

  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    byebug
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

  def render_record_invalid(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end 


end


