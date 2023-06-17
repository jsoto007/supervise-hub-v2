import React, { useState, useEffect} from "react";

const DataContext = React.createContext();

function DataContextProvider( { children } ) {

  const [meetingData, setMeetingData] = useState([])
  const [employeeData, setEmployeeData] = useState([])

  useEffect(() => {
    fetch(`/meetings`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((meetings) => setMeetingData(meetings))
      }
    })
  }, [])

  useEffect(() => {
    fetch(`/employees`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((employees) => setEmployeeData(employees))
      }
    })
  }, [])

  return (
    <DataContext.Provider value={{
      meetingData, 
      setMeetingData,
      employeeData
    }}>
      {children}
    </DataContext.Provider>
  )

}

export {DataContext, DataContextProvider}