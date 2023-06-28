import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import NotesCard from "./NotesCard";


function UserMeetingCard() {

  const {meetingData} = useContext(DataContext)

  return (
    <div class=" text-center">
      {meetingData.map((meeting) => {
        return (
          <div key={meeting.id} class="bg-white my-4 p-3 rounded-lg mx-40">
            <ul>
              {meeting.completed ? (<span id="check-mark">✓</span>) :  null}
              <li><b>{meeting.staff_name}</b>  | {meeting.scheduled_date}</li>
              <li><b>{meeting.title}</b></li>
            </ul>
            {meeting.notes.length > 0 ? 
            (<NotesCard notesData={meeting}/>) : 
            (<li class="text-center mb-4">There are no notes available for this meeting</li>)}
          </div>
        )
      })}
      
    </div>
  )
}

export default UserMeetingCard;