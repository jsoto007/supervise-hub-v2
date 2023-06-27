import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContextProvider";
import DateTimePicker from "react-datetime-picker";
import moment, { updateLocale } from "moment/moment";

function EditMeeting( { meeting, setToggleEdit, toggleEdit } ) {

  const {meetingData, setMeetingData} = useContext(DataContext)

  const { id, title, staff_name} = meeting;
  
  const [errors, setErrors] = useState([])

  const [value, onChange] = useState();

  const [newDateTime, setNewDateTime] = useState();

  const updatedInString = moment(value).toISOString();

  const [patchedMeeting, setPatchedMeeting] = useState({
    scheduled_date: `${updatedInString}`,
    title: `${title}`,
  })

  console.log("outside", updatedInString)

  function handleEditMeeting(data) {
    const updatedMeetings = meetingData.filter((meet) => meet.id !== meeting.id);
    
    setMeetingData([data, ...updatedMeetings])
  }

  async function handlePatchSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/meetings/${id}`, {
      method: "PATCH", 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(patchedMeeting)
    });

    const data = await response.json();
      if(response.ok){
        handleEditMeeting(data)
        setToggleEdit((toggleEdit) => !toggleEdit)
      }else {
        setErrors(data)
      }
      
    }


  function handleChange(e) {
    const key = e.target.id
    setPatchedMeeting({
      ...patchedMeeting, 
      [key]: e.target.value
    })
  }


  return (
    <div class="card w-96 bg-base-100 shadow-xl bg-white mx-3 rounded-xl text-center pt-3 pb-2">

      <form onSubmit={handlePatchSubmit} class="text-left ml-4">
        <h5 class="mb-3"><b>Staff: </b>{staff_name}</h5>
        <label class="mt-2" for="title"><b>Description | Title: </b></label>
        <input
          type="text"
          name="title"
          value={patchedMeeting.title}
          id="title"
          onChange={handleChange}
          class="text-black input input-bordered w-full max-w-xs py-2 rounded-md bg-gray-200"
        />
        <br />
        <h5 class="mt-3"><b>Date | Time: </b></h5>
        <DateTimePicker onChange={(newValue) => onChange(newValue)} value={value} />
           {errors.length < 1 ? 
          null
          : 
          <ul class="bg-red-300 my-1 rounded-lg p-2" key={errors}>
            {errors.errors.map((error) => {
              return (
                <li class="mx-5">ⓧ  {error}</li>
              )
            })}
          </ul>
        }

        <button 
          type="submit" 
          class="shadow-slate-600 text-white bg-gradient-to-r from-slate-900 to-slate-700
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-4 mt-4"
        >Submit Changes</button>
      </form>


    </div>
  )
}

export default EditMeeting;