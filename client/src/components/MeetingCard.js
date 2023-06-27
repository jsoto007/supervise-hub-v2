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
    <div class="h-auto max-w-full rounded-lg">
      <div key={meeting.id}>
        {toggleEdit ? (

            <EditMeeting 
              meeting={meeting} 
              toggleEdit={toggleEdit} 
              setToggleEdit={setToggleEdit} 
            />
        ) : (
            <div 
              class="card w-96 bg-base-100 shadow-xl bg-white mx-3 rounded-xl text-center pt-3 pb-2"
            >
            <div class=" px-4 float-right text-md">
              <button 
                class="mx-2 px-1 focus:outline-none  focus:bg-slate-300 hover:bg-slate-200 rounded-md active:bg-slate-400" 
                onClick={handleEditToggle}
              >✏️</button>
              <DeleteMeeting meeting={meeting} />
            </div>
            <div>
              <div id="staff-name" class="text-left ml-4"><b>Staff: </b>{meeting.staff_name}</div>

              <div class="text-left ml-4 mr-1 flow-root"><b>Description: </b>{meeting.title}</div>
              
              <div class="text-left ml-4"><b>Date | Time: </b>{meeting.formated_date}</div>
            </div>
            <NavLink 
              id="details"
              to={`/meetings/${meeting.id}/notes`}
            >
            <br />
          
            <button 
              type="submit" 
              class="shadow-slate-400 text-white bg-gradient-to-r from-slate-700 to-slate-500
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-8 mt-2"
            ><spam class="text-bold text-md">&#43;</spam> Add Notes</button>
            </NavLink>

          </div>
        )}
      </div>
    </div>
  )
}

export default MeetingCard;