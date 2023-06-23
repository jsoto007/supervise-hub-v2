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
    <div class="flex ... drop-shadow-xl">
        <div class="flex-1 ...">
          <img
                id="app-logo"
                src={pageLogo}
                alt="Expense Tacker"
          />
        </div>
      <div class="contents">
      <div class="flex-1 ... bg-white mx-5">
        <Login />
          <hr id="login-line"/>
          {toggleBtn ? (<button  class="btn bg-emerald-900 bg-opacity-20 rounded-md px-2 mx-8 my-4" onClick={handleToggleEdit}> Create an Account </button>) : (<Signup />)}    
      </div> 
      </div>
    </div>
  )
}

export default Auth;