import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function DeleteMeeting( { meeting } ) {

  const {meetingData, setMeetingData} = useContext(DataContext)

  const {id} = meeting

  function handleDeleteClick() {
    fetch(`meetings/${id}`, {
      method: "DELETE", 
    })
    .then(handleDeleteUpdate(meeting))
  }

  function handleDeleteUpdate(meeting) {
    const updatedMeetings = meetingData.filter((meet) => meet.id !== meeting.id);
    setMeetingData(updatedMeetings)
  }

  return (
    <button className="delete-edit-btn" onClick={handleDeleteClick}>🗑️</button>
  )
}

export default DeleteMeeting;
