import React from "react";
import EmployeeMenu from "./EmployeeMenu";
import EmployeeMeetings from "./EmployeeMeetings";

function CompletedMeetingsContainer() {

  return (
    <div>
      <div className="menu-container">
        
      <EmployeeMenu />
      </div>

      <div className="meetings-container">
        <h2>Employees Meetings</h2>
      <EmployeeMeetings />
      </div>
    </div>
  )
}

export default CompletedMeetingsContainer;