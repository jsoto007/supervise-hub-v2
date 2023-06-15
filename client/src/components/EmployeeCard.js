import React from "react";
import { NavLink } from "react-router-dom"


function EmployeeCard( { employeeInfo } ) {

  const {name, id} = employeeInfo

  return (
      <div key={id}  className="employee-list-btn">
        <NavLink 
          id="details"
          className="nav-link"
          to={`/supervisions/${id}`}
        >
        {name}
        </NavLink>
      </div>
  )
}

export default EmployeeCard;