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
    <button 
      class="px-1 focus:outline-none  focus:bg-slate-300 hover:bg-slate-200 rounded-md active:bg-slate-400"  
      onClick={handleDeleteClick}
    >🗑️</button>
  )
}

export default DeleteMeeting;
