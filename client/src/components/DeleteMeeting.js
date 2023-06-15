import React from "react";

function DeleteMeeting( { meeting } ) {

  const {id} = meeting

  function handleDeleteClick() {
    fetch(`meetings/${id}`, {
      method: "DELETE", 
    })
    .then(handleDeleteUpdate(meeting))
  }
  
  function handleDeleteUpdate() {

  }

  return (
    <button onClick={handleDeleteClick}> 🗑️ </button>
  )
}

export default DeleteMeeting;