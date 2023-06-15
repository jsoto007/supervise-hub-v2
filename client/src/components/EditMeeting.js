import React, { useState, useContext } from "react";

function EditMeeting( { meeting } ) {

  const { id, title, scheduled_date} = meeting;

  const [patchedMeeting, setPatchedMeeting] = useState({
    // title: `${title}`,
    // scheduled_date: `${scheduled_date}`
    title: `THE NEW TITLE`,
    scheduled_date: `2024-2-2`
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
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const response = await fetch('/login', {
  //     method: "POST", 
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body:JSON.stringify(loginData)
  //   });
  //   const data = await response.json();
  //   if(response.ok){
  //     setCurrentUser(data)
  //   } else {
  //     setErrors(data.error)
  //   }
  // }

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

      <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default EditMeeting;