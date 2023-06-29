import React, { useContext, useState} from "react";
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { DataContext } from "../context/DataContextProvider";

function NotesForm() {

  const { meetingData, setMeetingData} = useContext(DataContext)

  const {id} = useParams();
  const history = useHistory();

  const [formData, setFormData] = useState({
    meeting_id: `${id}`, 
    criteria1: "",
    note1: "",
    criteria2: "",
    note2: "", 
    criteria3: "", 
    note3: ""
  });

  function handleAddNotesToMeeting(newNotes) {
    const updatedMeetings = meetingData.map((meeting) => {
      if (meeting.id === newNotes.meeting_id) {
        
        meeting.completed = true;

        return {
          ...meeting, 
          notes: [newNotes, ...meeting.notes]
        }
      } else {
        return meeting
      }
    })
    setMeetingData(updatedMeetings);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`/notes`, {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })

    const newNotes = await response.json();
      if (response.ok) {
        handleAddNotesToMeeting(newNotes)

      }
      history.push(`/user/meetings`)

  }

  function handleChange(e) {
    const key = e.target.id
    setFormData({
       ...formData,
       [key]: e.target.value
    })
  }

  return (
    <div class="mx-5 rounded-lg bg-white">

      <form onSubmit={handleSubmit} className="new-meeting-form ml-5">

        <h3 class="mb-2 mt-2 text-3xl font-medium leading-tight text-primary"
        >Meeting Notes</h3>

        <label 
          for="note1" 
          class="block mt-5 font-medium text-black text-lg font-mono"
        >Topic | Criteria: </label>
        <input 
          type="text" 
          id="note1"
          placeholder="Type here" 
          value={formData.note1}
          onChange={handleChange}
          class="block p-1.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 font-serif shadow-lg my-1"
        />
        <label 
          for="criteria1" 
          class="block mt-5 font-medium text-black text-lg font-mono"
        >Notes One: </label>
        <textarea 
          id="criteria1"
          rows="4" 
          class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 font-serif shadow-lg my-1" 
          placeholder="Write your thoughts here..."
          value={formData.criteria1}
          onChange={handleChange}
        ></textarea>

        <hr  class="w-3/4 mt-5"/>

        <label 
          for="note2" 
          class="block mt-5 font-medium text-black text-lg font-mono"
        >Topic | Criteria: </label>
        <input 
          type="text" 
          id="note2"
          placeholder="Type here" 
          value={formData.note2}
          onChange={handleChange}
          class="block p-1.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 font-serif shadow-lg my-1"
        />

        <label 
          for="criteria2" 
          class="block mt-5 font-medium text-black text-lg font-mono"
        >Notes Two: </label>
        <textarea 
          id="criteria2"
          rows="4" 
          class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 font-serif shadow-lg my-1 mb-2" 
          placeholder="Write your thoughts here..."
          value={formData.criteria2}
          onChange={handleChange}
        ></textarea>

        <hr  class="w-3/4 mt-5"/>

        <label 
          for="note3" 
          class="block mt-5 font-medium text-black text-lg font-mono"
        >Topic | Criteria: </label>
        <input 
          type="text" 
          id="note3"
          placeholder="Type here" 
          value={formData.note3}
          onChange={handleChange}
          class="block p-1.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 font-serif shadow-lg my-1"
        />

        <label 
          for="criteria3" 
          class="block mt-5 font-medium text-black text-lg font-mono"
        >Notes Three: </label>
        <textarea 
          id="criteria3"
          rows="4" 
          class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 font-serif shadow-lg my-1 mb-2" 
          placeholder="Write your thoughts here..."
          value={formData.criteria3}
          onChange={handleChange}
        ></textarea>

        <button 
          type="submit" 
          class="shadow-slate-600 text-white bg-gradient-to-r from-slate-900 to-slate-700
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-8 mt-2"
        >Add Notes</button>
      </form>
    </div>
  )

}

export default NotesForm;