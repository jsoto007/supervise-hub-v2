import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { NavLink } from "react-router-dom"
import DeleteMeeting from "./DeleteMeeting";
import EditMeeting from "./EditMeeting";

function MeetingCard() {

  const {meetingData} = useContext(DataContext)

  return (
    <div className="meetings_schedule">
      {meetingData.map((meeting) => {
        return (
          <div key={meeting.id}>
            <ul>
              <li>{meeting.title}</li>
              <li>{meeting.staff_name}  | {meeting.scheduled_date}</li>
            </ul>
            <DeleteMeeting meeting={meeting} />
            <EditMeeting meeting={meeting} />
            <NavLink 
              id="details"
              to={`/meetings/${meeting.id}/notes`}
            >
            <br />
            <button>Add Notes to Meeting</button>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default MeetingCard;