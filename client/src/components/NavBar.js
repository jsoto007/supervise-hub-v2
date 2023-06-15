import React, { useContext} from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";




function NavBar() {

  const {handleLogout} = useContext(UserContext)

  return (
    <div>
      <button id="logout-btn" onClick={handleLogout}>Logout</button>
      <nav id="nav-bar">
        <NavLink
          className="nav-link"
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
        className="nav-link"
        to="/supervisions"
        exact
        >
          Supervisions
        </NavLink>
        <NavLink
        className="nav-link"
        to="/user/meetings"
        exact
        >
          My Meetings
        </NavLink>
        <NavLink
        className="nav-link"
        to="/user/meetings/create"
        exact
        >
          Schedule Meeting
        </NavLink>
      </nav>
    </div>
  )

}

export default NavBar;
