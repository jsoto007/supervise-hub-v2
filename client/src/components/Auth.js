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
    <div class="flex ... drop-shadow-xl mt-10">
        <div class="flex-1 ...">
          <img
                id="app-logo"
                src={pageLogo}
                alt="Expense Tacker"
                class="rounded-2xl ml-2 mr-5"
          />
      <ul class="text-center text-2xl font-serif font-medium">
        <li class="my-3">Help your employees develop their roles through open communication</li>
        <li>Promote Support, Learning, and Accountability</li>
      </ul>
        </div>
      <div class="contents">
      <div class="flex-1 ... bg-white mx-5 rounded-2xl">
        <Login />
          <hr id="login-line"/>
          {toggleBtn ? (<button  class="btn bg-emerald-900 bg-opacity-20 rounded-md px-2 mx-8 my-4" onClick={handleToggleEdit}> Create an Account </button>) : (<Signup />)}    
      </div> 
      </div>
    </div>
  )
}

export default Auth;