import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Route, Switch } from "react-router-dom"
import '../App.css';
import Auth from "./Auth";
import NavBar from "./NavBar";
import Meetings from "./Meetings";
import EmployeeMenu from "./EmployeeMenu";
import NotesForm from "./NotesForm";
import UserMeetings from "./UserMeetings";
import EmployeeMeetings from "./EmployeeMeetings";
import NewMeetingForm from "./NewMeetingForm";
import CompletedMeetingsContainer from "./CompletedMeetingsContainer";


function App() {

  // const {currentUser}  = useContext(UserContext);

  // if (!currentUser.id) return <Auth />

  const userLogedIn = window.localStorage.getItem("isLoggedIn");

  if (userLogedIn === null) return <Auth />

  return (
    <div className="App">
      
      {/* <h1>Welcome {currentUser.username}</h1> */}
      <NavBar />

      <Switch>
        <Route exact path="/">
           <Meetings />
        </Route>
        <Route exact path="/supervisions">
          <EmployeeMenu />

        </Route>
        <Route exact path="/supervisions/:id">
          <CompletedMeetingsContainer />
        </Route>
        <Route exact path="/meetings/:id/notes">
          <NotesForm />
        </Route>
        <Route exact path="/user/meetings">
          <UserMeetings />
        </Route>
        <Route exact path="/user/meetings/create">
          <NewMeetingForm />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
