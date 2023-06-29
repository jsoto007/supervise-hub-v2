import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import NotesCard from "./NotesCard";


function UserMeetingCard() {

  const {meetingData} = useContext(DataContext)

  return (
    <div class=" text-center">
      {meetingData.map((meeting) => {
        return (
          <div key={meeting.id} class="bg-white my-4 p-3 rounded-lg mx-[20%]">
            <ul>
              {meeting.completed ? (<span id="check-mark" class="float-left ml-3 bg-gradient-to-r from-slate-900 to-slate-700 -mt-3 text-yellow-500 text-xl rounded-b-sm p-1">✓</span>) :  null}
              <li class="text-lg"><span class="mr-2 text-stone-600">Staff:</span>{meeting.staff_name}</li>

              <li class="text-lg"><span class="mr-2 text-stone-600">Date:</span>{meeting.formated_date}</li>

              <li class="text-lg"><span class="mr-2 text-stone-600">Description:</span>{meeting.title}</li>
{/* 
              <li><b>{meeting.staff_name}</b>  | {meeting.scheduled_date}</li>
              <li><b>{meeting.title}</b></li> */}
            </ul>

            {meeting.notes.length > 0 ? 
            (<NotesCard notesData={meeting}/>) : 
            (<h3 class="text-center mb-4 mt-2 bg-stone-100 opacity-17 text-stone-500">There are no notes available for this meeting</h3>)}
          </div>
        )
      })}
      
    </div>
  )
}

export default UserMeetingCard;