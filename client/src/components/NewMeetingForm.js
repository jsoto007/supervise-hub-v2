import React, { useState, useContext } from "react";
import StaffDropDownMenu from "./StaffDropDowmMenu";
import { DataContext } from "../context/DataContextProvider";
import DateTimePicker from "react-datetime-picker";

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function NewMeetingForm() {

  const {meetingData, setMeetingData} = useContext(DataContext)

  const [dateTime, setDateTime] = useState(new Date());

  const [formData, setFormData] = useState({
    title: "", 
    completed: false, 
    employee_id: "",
    scheduled_date: `${dateTime}` 
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
    setMeetingData([newMeeting, ...meetingData])
  }


  function handleChange(e) {
    const key = e.target.id
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

 console.log(dateTime)

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-meeting-form">
      <h2>New Meeting Form</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          id="title"
          onChange={handleChange}
          placeholder="Title: Meeting Description"
          className="new-meeting-input"
        />
        {/* <br/> */}
     
        <DateTimePicker onChange={setDateTime} value={dateTime} />
        <br />

        <StaffDropDownMenu staffInfo={formData} setStaffInfo={setFormData} />
        <button id="create-meeting-tbn" type="sumit">Add Meeting</button>
      </form>


    </div>
  )
}

export default NewMeetingForm;

