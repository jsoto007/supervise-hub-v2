import React, { useState } from "react";


function NewMeetingForm() {

  const [formData, setFormData] = useState([])


  // t.integer "user_id"
  // t.integer "employee_id"
  // t.string "title"
  // t.boolean "completed"
  // t.datetime "scheduled_date"

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


    </div>
  )
}

export default NewMeetingForm;

