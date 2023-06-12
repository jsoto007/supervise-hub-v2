import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import '../App.css';
import Login from './Login';
import Signup from './Signup';


function App() {

  const {currentUser}  = useContext(UserContext);

  if (!currentUser.id) return <h1>TESTING</h1>


  return (
    <div className="App">
      <Login />
      <Signup />
    </div>
  );
}

export default App;
