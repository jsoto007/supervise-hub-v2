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

  console.log(employees)

  return (
    <div>
      {employees.map((emp)=> {
        {console.log("inside map:", emp.employee.name)}
        return (
          <EmployeeCard  employeeInfo={emp.employee} key={emp.id}/>
        )
      })}
    </div>
  )
}



export default EmployeeMenu;

