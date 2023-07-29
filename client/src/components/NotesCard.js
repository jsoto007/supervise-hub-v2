import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'

function NotesCard( { notesData } ) {

  const { title, formated_date, staff_name, notes} = notesData

  return (
    <Popup
    trigger={ 
    <button 
      type="submit" 
      class="shadow-slate-400 text-white bg-gradient-to-r from-slate-700 to-slate-500
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-600 shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mt-2"
    >View Meeting Notes</button>}
    modal
    nested
  >
    {close => (
      <div class="rounded-lg h-[210mm] w-[210mm] bg-gray-100 p-12" >
        <button className="close" onClick={close}>
          &times;
        </button>
        <div class="ml-5 p-12">
        <h3 class="text-lg font-sans font-semibold">Completed Supervision for:<span class="text-xl my-1  ml-2 font-serif underline ">{staff_name}</span></h3>
        <h5 class="text-lg my-1 font-serif"><span  class="text-sm">Description: </span>{title}</h5>
        <h5 class="text-lg my-1 font-sans"><span  class="text-sm font-serif">Description: </span>{formated_date}</h5>
        </div>
        <div className="content">

          {notes.map((note) => {
            return (
              <ul key={note.id}>
                <li><b> Topic | </b>{note.note1}</li>
                <li><b> Notes | </b>{note.criteria1}</li>
                <br />
                <li><b> Topic | </b>{note.note2}</li>
                <li><b> Notes | </b>{note.criteria2}</li>
                <br />
                <li><b> Topic | </b>{note.note3}</li>
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