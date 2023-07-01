import React from "react";
import UserMeetingCard from "./UserMeetingCard";


function UserMeetings(){

  return (
    <div class="bg-gradient-to-b from-slate-700 via-slate-600 to-slate-500 rounded-sm">
      <h1 class="text-white text-4xl text-bold mx-4 my-6 text-center">My Meetings and Notes</h1>
      <UserMeetingCard />
      <h1 class="p-3"></h1>
    </div>
  )
}

export default UserMeetings;

