import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function EmployeeMeetings( {id} ) {

  const [staffMeetings, setStaffMeetings] = useState([]);

  const routeParams = useParams();

  console.log(routeParams)
  
  useEffect(() => {
    fetch(`/employees/${id}`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((staffData) => setStaffMeetings(staffData))
      }
    })
  }, [id])

  console.log(staffMeetings)

return (
  <div>

  </div>
)

}

export default EmployeeMeetings;