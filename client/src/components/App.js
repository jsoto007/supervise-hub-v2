import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import '../App.css';
import Auth from "./Auth";
import Login from './Login';
import Signup from './Signup';


function App() {

  const {currentUser}  = useContext(UserContext);

  if (!currentUser.id) return <Auth />
console.log(currentUser)

  return (
    <div className="App">
      <h1>Welcome {currentUser.username}</h1>
    </div>
  );
}

export default App;
