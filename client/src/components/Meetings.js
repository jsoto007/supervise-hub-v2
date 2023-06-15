import React, {useState, useContext } from "react";
import MeetingCard from "./MeetingCard";
import { DataContext } from "../context/DataContextProvider";

function Meetings() {

  const {meetingData} = useContext(DataContext)

  return (
    <div>
      <h3>Upcoming Supervisions</h3>
      {meetingData.map((meeting) => {
        return (

          <MeetingCard meeting={meeting}/>
        )
      })}
    </div>
  )
}

export default Meetings;

