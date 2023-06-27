import React, {useState, useContext } from "react";
import MeetingCard from "./MeetingCard";
import { DataContext } from "../context/DataContextProvider";

function Meetings() {

  const {meetingData} = useContext(DataContext)

  return (
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      {meetingData.map((meeting) => {
        return (
          <MeetingCard meeting={meeting}/>
        )
      })}
    </div>
  )
}

export default Meetings;