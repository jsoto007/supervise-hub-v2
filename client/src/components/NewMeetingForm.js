import React, { useState } from "react";
import StaffDropDownMenu from "./StaffDropDowmMenu";


function NewMeetingForm() {

  const [staffInfo, setStaffInfo] = useState([])

  // console.log(staffInfo.id, `this is the interpolation ${formData.employee_id}`)

  const [formData, setFormData] = useState({
    title: "First TEST", 
    completed: false, 
    employee_id: "",
    scheduled_date: "2023-12-12" 
    
  })

  async function handleSubmit(e) {

    e.preventDefault();

    const response = await fetch(`/meetings`, {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data)
    }

  }


  // title: "First TEST", 
  //   completed: false, 
  //   scheduled_date: "2023-12-12", 
  //   employee_id: "136"
  function handleChange() {

  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={staffInfo.title}
          id="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="scheduled_date"
          value={staffInfo.scheduled_date}
          id="scheduled_date"
          onChange={handleChange}
          placeholder="scheduled_date"
        />
        <br />
        <StaffDropDownMenu staffInfo={formData} setStaffInfo={setFormData} />
        <button type="sumit">Add Meeting</button>
      </form>


    </div>
  )
}

export default NewMeetingForm;

