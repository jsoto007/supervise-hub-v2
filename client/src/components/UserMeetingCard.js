import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import NotesCard from "./NotesCard";


function UserMeetingCard() {


  const {meetingData} = useContext(DataContext)

  return (
    <div className="meetings-card">
      {meetingData.map((meeting) => {
        return (
          <div key={meeting.id}>
            <ul>
              {meeting.completed ? (<span id="check-mark">✓</span>) :  null}
              <li><b>{meeting.staff_name}</b>  | {meeting.scheduled_date}</li>
              <li><b>{meeting.title}</b></li>
            </ul>
            {meeting.notes.length > 0 ? 
            (<NotesCard notesData={meeting}/>) : 
            (<li>There are no notes available for this meeting</li>)}
          </div>
        )
      })}
    </div>
  )
}

export default UserMeetingCard;