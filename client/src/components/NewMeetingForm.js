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

  const [errors, setErrors] = useState([])

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
      setErrors(data.error)
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
          type="submit" 
          class="shadow-slate-600 text-white bg-gradient-to-r from-slate-900 to-slate-700
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-8 mt-2"
        >Create Meeting</button>
         {errors.length < 1 ? 
          null
          : 
          <ul class="bg-red-400 mx-2 my-1 rounded-lg p-2" key={errors.login}>
          <li class="mx-5">ⓧ  {errors.login}</li>
          </ul>
        }
      </form>
    </div>
  )
}

export default NewMeetingForm;