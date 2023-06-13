import React from "react";
import { NavLink } from "react-router-dom"
import EmployeeMeetings from "./EmployeeMeetings";

function EmployeeCard( { employee } ) {

  const {name, id} = employee

  return (
    <div>
      <div key={id}>
        <NavLink 
          id="details"
          to={`/employees/${id}`}
        >
        <button>{name}</button>
        </NavLink>
      </div>
    </div>
  )
}

export default EmployeeCard;