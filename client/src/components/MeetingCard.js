import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function MeetingCard() {

  const {meetingData} = useContext(DataContext)

  return (
    <div className="meetings_schedule">
      {meetingData.map((meeting) => {
        return (
          <ul key={meeting.id}>
            <li>{meeting.title}</li>
            <li>{meeting.staff_name}  | {meeting.scheduled_date}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default MeetingCard;