class NotesController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

  def create
    notes = Note.create!(note_params)

    meeting = Meeting.find_by(id: params[:meeting_id])
    meeting.update!(
      completed: true
    )

    render json: notes
  end 

  
  private

  def render_record_invalid(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end 
 
  def note_params
    params.permit(:criteria1, :note1, :criteria2, :note2, :criteria3, :note3, :meeting_id)
  end 


end
