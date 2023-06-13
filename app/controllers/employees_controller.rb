class EmployeesController < ApplicationController


  # Get all employees
  # include the meetings where completed equals true
  # Include the notes for those meetings. 

  def show 
    employee = Employee.find_by(id: params[:id])
    employee_meetings = employee.meetings.where( "completed = true")

    render json: employee_meetings
  end 

end
