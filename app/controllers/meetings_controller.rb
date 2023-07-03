class MeetingsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

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

  def update
    meeting = Meeting.find_by(id: params[:id])
    meeting.update!(
      title: params[:title],
      scheduled_date: params[:scheduled_date]
    )
    render json: meeting, status: :accepted
    
  end 

  def destroy
    meeting = Meeting.find_by(id: params[:id])
    meeting.destroy
  end

  private

  def find_user
    user = User.find_by(id: session[:user_id])
  end 

  def meeting_params
    params.permit(:title, :completed, :scheduled_date, :employee_id)
  end 

  def render_record_invalid(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end 

end
