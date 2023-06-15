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
    <div>
      <form onSubmit={handleSubmit} className="new-meeting-form">
        <h2>Meeting Notes</h2>
        <input
          type="text"
          name="criteria1"
          value={formData.criteria1}
          id="criteria1"
          onChange={handleChange}
          placeholder="Criteria: Topic for this Notes"
          className="new-notes-input"
        />
        <br/>
        <input
          type="text"
          name="note1"
          value={formData.note1}
          id="note1"
          onChange={handleChange}
          placeholder="NOTES: relevant to the criteria"
          className="new-notes-input"
        />
        <br/>
        <input
          type="text"
          name="criteria2"
          value={formData.criteria2}
          id="criteria2"
          onChange={handleChange}
          placeholder="Criteria: Topic for this Notes"
          className="new-notes-input"
        />
        <br/>
        <input
          type="text"
          name="note2"
          value={formData.note2}
          id="note2"
          onChange={handleChange}
          placeholder="NOTES: relevant to the criteria"
          className="new-notes-input"
        />
        <br/>
        <input
          type="text"
          name="criteria3"
          value={formData.criteria3}
          id="criteria3"
          onChange={handleChange}
          placeholder="Criteria: Topic for this Notes"
          className="new-notes-input"
        />
        <br/>
        <input
          type="text"
          name="note3"
          value={formData.note3}
          id="note3"
          onChange={handleChange}
          placeholder="NOTES: relevant to the criteria"
          className="new-notes-input"
        />
        <br/>
        <button id="create-notes-tbn" type="submit"> Add Notes </button>
      </form>
    </div>
  )

}

export default NotesForm;