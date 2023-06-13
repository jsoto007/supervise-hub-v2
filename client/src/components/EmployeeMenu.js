import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeMenu() {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch(`/employees`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((employeeList) => setEmployees(employeeList))
      }
    })
  }, [])

  return (
    <div>
      {employees.map((emp)=> {
        return (
          <EmployeeCard  employee={emp} key={emp.id}/>
        )
      })}
    </div>
  )
}


export default EmployeeMenu;

