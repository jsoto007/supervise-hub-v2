import React from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom"
import NavBar from './NavBar';
import Auth from './Auth';
import Meetings from './Meetings'
import NewMeetingForm from './NewMeetingForm';
import NotesForm from './NotesForm';
import UserMeetings from './UserMeetings';

function App() {
  
  const userLogedIn = window.localStorage.getItem("isLoggedIn")

  
  if (userLogedIn === null) return <Auth />
  
  return (
    <div class="max-w-screen-2xl mx-auto">
      <NavBar />
      <Switch>
        <Route exact path="/">
           <Meetings />
        </Route>
        <Route exact path="/meetings/:id/notes">
          <NotesForm />
        </Route>
        <Route exact path="/user/meetings/create">
          <NewMeetingForm />
        </Route>
        <Route exact path="/user/meetings">
          <UserMeetings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
