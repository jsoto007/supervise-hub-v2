import React, { useState, useEffect} from "react";

const DataContext = React.createContext();

function DataContextProvider( { children } ) {
  const [meetingData, setMeetingData] = useState([])


  useEffect(() => {
    fetch(`/meetings`)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((meetings) => setMeetingData(meetings))
      }
    })
  }, [])

  return (
    <DataContext.Provider value={{
      meetingData, 
      setMeetingData
    }}>
      {children}
    </DataContext.Provider>
  )

}

export {DataContext, DataContextProvider}