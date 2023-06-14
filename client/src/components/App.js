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


function App() {

  const {currentUser}  = useContext(UserContext);

  if (!currentUser.id) return <Auth />

  return (
    <div className="App">
      
      <h1>Welcome {currentUser.username}</h1>
      <NavBar />

      <Switch>
        <Route exact path="/">
           <Meetings />
        </Route>
        <Route exact path="/supervisions">
          <h3>Staff with Completed Supervisions</h3>
          <EmployeeMenu />
          <EmployeeMeetings />
        </Route>
        <Route exact path="/supervisions/:id">
          <h3>Staff with Completed Supervisions</h3>
          <EmployeeMenu />
          <EmployeeMeetings />
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
