import React from "react";

import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'

function NotesCard( { notesData } ) {

  const { title, scheduled_date, staff_name, notes} = notesData

  return (
    <Popup
    trigger={<button className="button"> Meetings Notes </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <h3>Completed Supervision</h3>
        <h2>{staff_name}</h2>
        <h5>{title}</h5>
        <h5>{scheduled_date}</h5>
        <div className="content">

          {notes.map((note) => {
            return (
              <ul key={note.id}>
                <li><b> Subject | </b>{note.note1}</li>
                <li><b> Notes | </b>{note.criteria1}</li>
                <br />
                <li><b> Subject | </b>{note.note2}</li>
                <li><b> Notes | </b>{note.criteria2}</li>
                <br />
                <li><b> Subject | </b>{note.note3}</li>
                <li><b> Notes | </b>{note.criteria3}</li>
              </ul>
            )
          })}
      
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> More Info </button>}
            position="top center"
            nested
          >
            <span>
              Add information about the supervision
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close notes
          </button>
        </div>
      </div>
    )}
  </Popup>
  )
}

export default NotesCard;