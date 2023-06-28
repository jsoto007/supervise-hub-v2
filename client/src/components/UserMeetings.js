import React from "react";
import UserMeetingCard from "./UserMeetingCard";


function UserMeetings(){

  return (
    <div class="bg-gradient-to-r from-gray-400 to-slate-800">
      <h1 class="text-white text-4xl text-bold mx-4 my-6 text-center">My Meetings and Notes</h1>
      <UserMeetingCard />
    </div>
  )
}

export default UserMeetings;

