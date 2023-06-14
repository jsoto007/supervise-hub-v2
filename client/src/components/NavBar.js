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
          <button>Home</button>
        </NavLink>
        <NavLink
        className="nav-link"
        to="/supervisions"
        exact
        >
          <button>Supervisions</button>
        </NavLink>
        <NavLink
        className="nav-link"
        to="/user/meetings"
        exact
        >
          <button>My Meetings</button>
        </NavLink>
        <NavLink
        className="nav-link"
        to="/user/meetings/create"
        exact
        >
          <button>Schedule Meeting</button>
        </NavLink>
      </nav>
    </div>
  )

}

export default NavBar;
