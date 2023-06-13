class EmployeesController < ApplicationController


  # Get all employees
  # include the meetings where completed equals true
  # Include the notes for those meetings. 

  
  #Not using/ if not usefull will delete
  def show 
    employee = Employee.find_by(id: params[:id])
    employee_meetings = employee.meetings.where( "completed = true")

    render json: employee_meetings
  end 

  def index
    employees = Employee.all
    employees.uniq

    render json: employees
  end 

end
