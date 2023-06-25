import React, { useState, useContext } from "react";
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
    <div>
      <div key={meeting.id}>
        {toggleEdit ? (

            <EditMeeting 
              meeting={meeting} 
              toggleEdit={toggleEdit} 
              setToggleEdit={setToggleEdit} 
            />
        ) : (
            <div 
              class="card w-96 bg-base-100 shadow-xl bg-white my-2 mx-3 rounded-xl text-center pt-3 pb-2"
            >
            <div class=" px-4 float-right text-md">
              <button 
                class="mx-2 px-1 focus:outline-none  focus:bg-slate-300 hover:bg-slate-200 rounded-md active:bg-slate-400" 
                onClick={handleEditToggle}
              >✏️</button>
              <DeleteMeeting meeting={meeting} />
            </div>
            <div class="card-body">
              <div id="staff-name" class="text-left ml-4"><b>Staff: </b>{meeting.staff_name}</div>
              <div class="text-left ml-4 mr-1 flow-root"><b>Description: </b>{meeting.title}</div>
              <div class="text-left ml-4"><b>Date | Time: </b>{meeting.scheduled_date}</div>
            </div>
            <NavLink 
              id="details"
              to={`/meetings/${meeting.id}/notes`}
            >
            <br />
            <button 
              id="add-notes-btn"
              class="mx-2 px-1 focus:outline-none  focus:bg-slate-300 hover:bg-slate-200 rounded-md active:bg-slate-400 bg-slate-100" 

            ><spam class="text-bold text-md">&#43;</spam> Notes to Meeting</button>
            </NavLink>

          </div>
        )}
      </div>
    </div>
  )
}

export default MeetingCard;