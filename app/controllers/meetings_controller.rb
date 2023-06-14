class MeetingsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    all_meetings = user.meetings.all
    render json: all_meetings
  end 

  def create
    user = User.find_by(id: session[:user_id])
    meeting = user.meetings.create!(meeting_params)
    render json: meeting
  end 

  def completed_meetings
    meetings = Meeting.all.where("completed = true")
    render json: meetings
  end 

  private

  def meeting_params
    params.permit(:title, :completed, :scheduled_date, :employee_id)
  end 

end
