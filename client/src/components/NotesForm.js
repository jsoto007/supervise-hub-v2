import React, { useState} from "react";
import { useParams } from "react-router-dom"


function NotesForm() {

  const {id} = useParams();

  const [formData, setFormData] = useState({
    meeting_id: `${id}`, 
    criteria1: "",
    note1: "",
    criteria2: "",
    note2: "", 
    criteria3: "", 
    note3: ""
  });

  function handleSubmit() {

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="criteria1"
          value={formData.criteria1}
          id="criteria1"
          onChange={handleChange}
          placeholder="criteria1"
        />
        <input
          type="text"
          name="note1"
          value={formData.note1}
          id="note1"
          onChange={handleChange}
          placeholder="note1"
        />
        <input
          type="text"
          name="criteria2"
          value={formData.criteria2}
          id="criteria2"
          onChange={handleChange}
          placeholder="criteria2"
        />
        <input
          type="text"
          name="note2"
          value={formData.note2}
          id="note2"
          onChange={handleChange}
          placeholder="note2"
        />
        <input
          type="text"
          name="criteria3"
          value={formData.criteria3}
          id="criteria3"
          onChange={handleChange}
          placeholder="criteria3"
        />
        <input
          type="text"
          name="note3"
          value={formData.note3}
          id="note3"
          onChange={handleChange}
          placeholder="note3"
        />

        <button type="submit"> Add Notes </button>
      </form>
    </div>
  )

}

export default NotesForm;