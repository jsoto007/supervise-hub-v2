import React, { useState } from "react";
import { DataContext } from "../context/DataContextProvider";
import { NavLink } from "react-router-dom"
import DeleteMeeting from "./DeleteMeeting";
import EditMeeting from "./EditMeeting";

function MeetingCard( { meeting } ) {

  const [toggleEdit, setToggleEdit] = useState(false)

  function handleEditToggle(){
    setToggleEdit((toggleEdit) => !toggleEdit)
  }

  return (
    <div className="meetings_schedule">
      <div key={meeting.id}>
        {toggleEdit ? (

            <EditMeeting 
              meeting={meeting} 
              toggleEdit={toggleEdit} 
              setToggleEdit={setToggleEdit} 
            />
        ) : (
          <div>
            <ul>
              <li>{meeting.title}</li>
              <li>{meeting.staff_name}  | {meeting.scheduled_date}</li>
            </ul>

            <button onClick={handleEditToggle}>✏️</button>

            <DeleteMeeting meeting={meeting} />

            <NavLink 
              id="details"
              to={`/meetings/${meeting.id}/notes`}
            >
            <br />
            <button>Add Notes to Meeting</button>
            </NavLink>

          </div>
        )}
      </div>
    </div>
  )
}

export default MeetingCard;