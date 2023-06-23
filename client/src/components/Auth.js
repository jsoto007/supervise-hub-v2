import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import pageLogo from "../pageLogo.png"


function Auth() {

  const [toggleBtn, setToggleBtn] = useState([])

  function handleToggleEdit() {
    setToggleBtn((toggleBtn) => !toggleBtn)
  }

  return (
    <div class="flex ...">
        <div class="flex-1 ...">
          <img
                id="app-logo"
                src={pageLogo}
                alt="Expense Tacker"
          />
        </div>
      <div class="contents">
      <div class="flex-1 ...">
        <Login />
          <hr id="login-line"/>
          {toggleBtn ? (<button onClick={handleToggleEdit}> Create an Account </button>) : (<Signup />)}    
      </div> 
      </div>
    </div>
  )
}

export default Auth;