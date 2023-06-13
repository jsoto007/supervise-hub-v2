import React from "react";
import { NavLink } from "react-router-dom"
import EmployeeMeetings from "./EmployeeMeetings";

function EmployeeCard( { employeeInfo } ) {

  const {name, id} = employeeInfo

  return (
      <div key={id}>
        <NavLink 
          id="details"
          to={`/supervisions/${id}`}
        >
        <button>{name}</button>
        </NavLink>
      </div>
  )
}

export default EmployeeCard;