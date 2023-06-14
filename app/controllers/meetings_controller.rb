class MeetingsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    all_meetings = user.meetings.all
    render json: all_meetings
  end 

  def completed_meetings
    meetings = Meeting.all.where("completed = true")
    render json: meetings
  end 
  
end
