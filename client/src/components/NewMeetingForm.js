import React, { useState } from "react";
import StaffDropDownMenu from "./StaffDropDowmMenu";


function NewMeetingForm() {

  const [staffInfo, setStaffInfo] = useState([])

  const [formData, setFormData] = useState({
    title: "First TEST", 
    completed: false, 
    scheduled_date: "2023-12-12", 
    employee_id: "136"
  })

  async function handleSubmit(e) {

    e.preventDefault();

    const response = await fetch(`/meetings`, {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data)
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="sumit">Add Meeting</button>
      </form>


    </div>
  )
}

export default NewMeetingForm;

