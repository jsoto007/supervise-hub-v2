import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeMenu() {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch(`/completed-meetings`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((employeeList) => setEmployees(employeeList))
      }
    })
  }, [])

  return (
    <div className="employee-menu-container">
      <h3>Employees With Completed Supervisions</h3>
      {employees.map((emp)=> {
        return (
          <EmployeeCard  employeeInfo={emp.employee} key={emp.id}/>
        )
      })}
    </div>
  )
}



export default EmployeeMenu;

