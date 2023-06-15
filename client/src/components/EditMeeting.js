import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function EditMeeting( { meeting, setToggleEdit, toggleEdit } ) {

  const {meetingData, setMeetingData} = useContext(DataContext)

  const { id, title, scheduled_date, staff_name} = meeting;
  
  const [errors, setErrors] = useState([])
  
  const [patchedMeeting, setPatchedMeeting] = useState({
    title: `${title}`,
    scheduled_date: `${scheduled_date}`
  })

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
      }else {
        setErrors(data)
      }

      setToggleEdit((toggleEdit) => !toggleEdit)
  }


  function handleChange(e) {
    const key = e.target.id
    setPatchedMeeting({
      ...patchedMeeting, 
      [key]: e.target.value
    })
  }

  console.log(errors)

  return (
    <div>

      <form onSubmit={handlePatchSubmit}>
        <input
          type="text"
          name="title"
          value={patchedMeeting.title}
          id="title"
          onChange={handleChange}
        />
        <br />
        <label for="scheduled_date">{staff_name} | </label>
        <input
          type="text"
          name="scheduled_date"
          value={patchedMeeting.scheduled_date}
          id="scheduled_date"
          onChange={handleChange}
        />
         {errors.length > 0 && (
          <ul className='error-messages'>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
         )}
      <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default EditMeeting;