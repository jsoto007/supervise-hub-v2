class MeetingsController < ApplicationController

  def index
    user = find_user
    all_meetings = user.meetings.all
    render json: all_meetings
  end 

  def create
    user = find_user
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
