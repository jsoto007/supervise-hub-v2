class NotesController < ApplicationController

  def create
    notes = Note.create!(note_params)

    meeting = Meeting.find_by(id: params[:meeting_id])
    meeting.update!(
      completed: true
    )

    render json: notes
  end 

  
  private
 
  def note_params
    params.permit(:criteria1, :note1, :criteria2, :note2, :criteria3, :note3, :meeting_id)
  end 


end
