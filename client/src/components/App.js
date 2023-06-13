import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Route, Switch } from "react-router-dom"
import '../App.css';
import Auth from "./Auth";
import NavBar from "./NavBar";
import Meetings from "./Meetings";
import EmployeeMenu from "./EmployeeMenu";

import EmployeeMeetings from "./EmployeeMeetings";


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
          <h3>Supervisions</h3>
          <EmployeeMenu />
          <EmployeeMeetings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
