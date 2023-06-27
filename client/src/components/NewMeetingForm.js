import React, { useState, useContext } from "react";
import StaffDropDownMenu from "./StaffDropDownMenu"
import { DataContext } from "../context/DataContextProvider";
import DateTimePicker from "react-datetime-picker";
import { useHistory } from "react-router-dom";
import moment from "moment";

import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function NewMeetingForm() {

  const {meetingData, setMeetingData} = useContext(DataContext)

  const [dateTime, setDateTime] = useState([]);

  const [respErrors, setRespErrors] = useState([])

  const history = useHistory();

  const updatedDate = moment(dateTime).toISOString()

  const [formData, setFormData] = useState({
    title: "", 
    completed: false, 
    employee_id: "",
    scheduled_date: `${updatedDate}`
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
      history.push("/")
    }else {
      console.log("resp", newMeeting.error)
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

  return (
    <div class="grid place-items-center bg-white mx-20 p-8 rounded-lg ">
      <form onSubmit={handleSubmit} className="new-meeting-form">
      <h2 class="text-3xl">Add New Meetings</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          id="title"
          onChange={handleChange}
          placeholder="Title: Meeting Description"
          class="text-black  font-bold input input-bordered w-full max-w-xs mt-3 py-2 rounded-md bg-gray-200"
        />
        <div class="form-control">
</div>
        <br/>
     
        <DateTimePicker onChange={setDateTime} value={dateTime} />
        <br />

        <StaffDropDownMenu staffInfo={formData} setStaffInfo={setFormData} />
        <button 
          id="create-meeting-tbn" 
          type="sumit"
          class=" px-1 focus:outline-none  focus:bg-slate-300 hover:bg-slate-500 rounded-md active:bg-slate-600 bg-slate-400"
        >Add Meeting</button>
      </form>
    </div>
  )
}

export default NewMeetingForm;