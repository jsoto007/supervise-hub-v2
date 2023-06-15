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
    <div>
      <div className="app-logo" >
        <img
        id="app-logo"
        src={pageLogo}
        alt="Expense Tacker"
      />
     
      </div>

      <div id="login-signup">
        <Login />
        <hr id="login-line"/>
        {toggleBtn ? (<button className="create-acc-btn" onClick={handleToggleEdit}> Create an Account </button>) : (<Signup />)}       
      </div>
    </div>
  )
}

export default Auth;