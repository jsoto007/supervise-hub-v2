import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";


function NavBar() {

  const {handleLogout} = useContext(UserContext)

  return (
    <div class="bg-white my-6 text-xl py-1 normal-case mx-4 rounded-lg">
      <nav id="nav-bar">
        <NavLink
          to="/"
          exact
        >
          <button class=" focus:outline-none  focus:bg-slate-300 mx-4 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1">
          Home
          </button>
        </NavLink>
        <NavLink
        to="/supervisions"
        exact
        >
          <button class=" focus:outline-none  focus:bg-slate-300 mx-3 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1">
          Supervisions
          </button>
          
        </NavLink>
        <NavLink
        to="/user/meetings"
        exact
        >
          <button class=" focus:outline-none  focus:bg-slate-300 mx-3 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1">
          My Meetings
          </button>
        </NavLink>
        <NavLink
        to="/user/meetings/create"
        exact
        >
          <button class=" focus:outline-none  focus:bg-slate-300 mx-4 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1">
          Schedule Meeting
          </button>
        </NavLink>

        <button 
        onClick={handleLogout}
        class=" focus:outline-none  focus:bg-slate-300 mx-5 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1 float-right">
          Logout
          </button>
      </nav>

    </div>
  )

}

export default NavBar;