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
    <div >

      <select 
        onChange={handleSelect}
        class="text-black  font-bold input input-bordered w-full max-w-xs my-3 py-3 rounded-md bg-gray-200" 
      >
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