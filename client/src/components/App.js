import React from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom"
import NavBar from './NavBar';
import Auth from './Auth';
import Meetings from './Meetings'
import EmployeeMenu from './EmployeeMenu'

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
      </Switch>
    </div>
  );
}

export default App;
