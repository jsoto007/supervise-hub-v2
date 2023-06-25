import React from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom"
import NavBar from './NavBar';
import Auth from './Auth';
import Meetings from './Meetings'
import EmployeeMenu from './EmployeeMenu'
import NewMeetingForm from './NewMeetingForm';

function App() {
  
  const userLogedIn = window.localStorage.getItem("isLoggedIn")

  if (userLogedIn === null) return <Auth />
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
           <Meetings />
        </Route>
        <Route exact path="/supervisions">
          <EmployeeMenu />
        </Route>
        <Route exact path="/user/meetings/create">
          <NewMeetingForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
