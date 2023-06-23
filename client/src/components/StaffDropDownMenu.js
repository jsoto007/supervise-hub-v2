import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function StaffDropDownMenu( { staffInfo, setStaffInfo } ){

  const  {employeeData} = useContext(DataContext)

  function handleSelect(e) {
    setStaffInfo({
      ... staffInfo, 
      employee_id: e.target.value
    })
  }

  return (
    <div>

      <select className="dropdown-select" onChange={handleSelect}>
        <option>Please select a Staff</option>
        {employeeData.map((empl) => {
          return (
            <option key={empl.id} value={empl.id}>{empl.name}</option>
          )
        })}
      </select>

    </div>
  )
}

export default StaffDropDownMenu;