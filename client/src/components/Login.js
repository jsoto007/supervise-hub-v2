import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

function Login() {


  const {setCurrentUser} = useContext(UserContext)

  const [errors, setErrors] = useState([])

  const [loginData, setLoginData] = useState({
    username: "", 
    password: ""
  })

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/login', {
      method: "POST", 
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(loginData)
    });
    const data = await response.json();
    if(response.ok){
      setCurrentUser(data)
      console.log(data)
      window.localStorage.setItem("isLoggedIn", true)
      handleReload()
    } else {
      setErrors(data.error)
    }
  }

   function handleReload() {
    setTimeout(function(){
      window.location.reload();
  }, 100);
  }

  function handleChange(e) {
    const key = e.target.id
    setLoginData({
      ...loginData, 
      [key]: e.target.value
    })
  }

  return (
    <div class="items-center" >
      <form onSubmit={handleSubmit}>
      <label class="block text-gray-700 text-lg font-bold mb-1 mx-8 mt-5" for="username">Username</label>
        <input
          type="text"
          name="username"
          value={loginData.username}
          id="username"
          onChange={handleChange}
          placeholder="Username"
          class=" text-black font-bold input input-bordered w-full max-w-xs my-3 mx-8 py-2 rounded-md bg-gray-200 "
        />
        <br />
        <label class="block text-gray-700 text-lg font-bold mb-1 mx-8" for="password">Password</label>
        <input
        type="password"
        name="password"
        value={loginData.password}
        id="password"
        onChange={handleChange}
        placeholder="Password"
        class=" text-black  font-bold input input-bordered w-full max-w-xs my-3 mx-8 py-2 rounded-md bg-gray-200"
      />
      <br />
      <button class="btn bg-emerald-900 bg-opacity-40 rounded-md px-2 mx-8 my-4">Log In</button>
        {errors.length < 1 ? 
          null
          : 
          <ul class="bg-red-400 mx-2 my-1 rounded-lg p-2" key={errors.login}>
          <li class="mx-5">ⓧ  {errors.login}</li>
          </ul>
        }
      </form>
    </div>
  )

}

export default Login;