import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

function StaffDropDownMenu(){

  const  {employeeData} = useContext(DataContext)

  return (
    <div>

      <select>
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