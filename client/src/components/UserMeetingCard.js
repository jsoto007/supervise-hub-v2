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
              <li><b>{meeting.staff_name}</b>  | {meeting.scheduled_date}</li>
              <li><b>{meeting.title}</b></li>
            </ul>
            <NotesCard notesData={meeting}/>
          </div>
        )
      })}
    </div>
  )
}

export default UserMeetingCard;