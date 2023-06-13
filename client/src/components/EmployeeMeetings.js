import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function EmployeeMeetings() {

  const [staffMeetings, setStaffMeetings] = useState([]);

  const { id } = useParams();
  
  useEffect(() => {
    fetch(`/employees/${id}`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((staffData) => setStaffMeetings(staffData))
      }
    })
  }, [id])

return (
  <div>
    {staffMeetings.map((meetingInfo) => {
      return (
        <ul key={meetingInfo.id}>
          <li>{meetingInfo.title}</li>
        </ul>
      )
    })}

  </div>
)

}

export default EmployeeMeetings;