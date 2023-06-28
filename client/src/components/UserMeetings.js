import React from "react";
import UserMeetingCard from "./UserMeetingCard";


function UserMeetings(){

  return (
    <div class="bg-gradient-to-br from-gray-300 to-sky-800">
      <h1 class="text-white text-4xl text-bold mx-4 my-6 text-center">My Meetings and Notes</h1>
      <UserMeetingCard />
    </div>
  )
}

export default UserMeetings;

