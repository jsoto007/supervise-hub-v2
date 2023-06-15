import React, { useState, useContext } from "react";
import StaffDropDownMenu from "./StaffDropDowmMenu";
import { DataContext } from "../context/DataContextProvider";

function NewMeetingForm() {

  const {meetingData, setMeetingData} = useContext(DataContext)

  const [formData, setFormData] = useState({
    title: "", 
    completed: false, 
    employee_id: "",
    scheduled_date: "" 
    
  })

  async function handleSubmit(e) {

    e.preventDefault();

    const response = await fetch(`/meetings`, {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    });

    const newMeeting = await response.json();
    if (response.ok) {
      handleAddMeeting(newMeeting)
    }

  }

  function handleAddMeeting(newMeeting) {
    setMeetingData([...meetingData, newMeeting])
  }


  function handleChange(e) {
    const key = e.target.id
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          id="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="scheduled_date"
          value={formData.scheduled_date}
          id="scheduled_date"
          onChange={handleChange}
          placeholder="scheduled_date"
        />
        <br />
        <StaffDropDownMenu staffInfo={formData} setStaffInfo={setFormData} />
        <button type="sumit">Add Meeting</button>
      </form>


    </div>
  )
}

export default NewMeetingForm;

