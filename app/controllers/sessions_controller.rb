class SessionsController < ApplicationController

  skip_before_action :authorized, only: :create

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
    end 
  end 

  private

  def session_params
    params.permit(:user_id, :username, :password)
  end 

  # def render_record_invalid(e)
  #   render json: {errors: e.record.errors.full_messages }, status: :unprocessable_entity
  # end 

end
