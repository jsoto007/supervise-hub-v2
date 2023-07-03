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

  const [date, setDate] = useState([]);

  const [errors, setErrors] = useState([])

  const history = useHistory();



  const [formData, setFormData] = useState({
    title: "", 
    completed: false, 
    employee_id: "",
    scheduled_date: "",
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
      setErrors(newMeeting)
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
        <br/>
        <span class="text-md font-semibold inline-block py-1 px-2 mr-1 mt-2">
        Please Select The Date & Time:
      </span>

      <input type="datetime-local" 
        id="scheduled_date"
        name="meeting-time" 
        value={formData.scheduled_date}
        onChange={handleChange}
        class="text-black  font-bold input input-bordered w-full max-w-xs mt-1 mb-3 py-2 pr-2 rounded-md bg-gray-200"
      ></input>

        <StaffDropDownMenu staffInfo={formData} setStaffInfo={setFormData} />
     
         <button 
          type="submit" 
          class="shadow-slate-600 text-white bg-gradient-to-r from-slate-900 to-slate-700
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-8 mt-2"
        >Create Meeting</button>
         {errors.length < 1 ? 
          null
          : 

          <div>
            {errors.errors.map((error) => {
              return (
                <ul class="bg-red-300 mx-1 my-2 rounded-lg p-2" key={errors.login}>
                  <li class="mx-5 my-1">ⓧ  {error}</li>
                </ul>
              )
            })}
          </div>
        }
      </form>
    </div>
  )
}

export default NewMeetingForm;