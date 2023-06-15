import React, { useState, useContext } from "react";

function EditMeeting( { meeting } ) {

  const { id, title, scheduled_date, staff_name} = meeting;

  const [patchedMeeting, setPatchedMeeting] = useState({
    title: `${title}`,
    scheduled_date: `${scheduled_date}`
  })

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
        console.log(data)
      } 

  }

  function handlePatchedCategory(editedMeeting) {

  }

  function handleChange(e) {
    const key = e.target.id
    setPatchedMeeting({
      ...patchedMeeting, 
      [key]: e.target.value
    })
  }

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
      <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default EditMeeting;