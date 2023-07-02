import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";


function Signup() {

  const {setCurrentUser} = useContext(UserContext)

  const [errors, setErrors] = useState([])

  const [signupData, setSignupData] = useState({
    username: "", 
    password: "",
    email: ""
  })

  function handleReload() {
    setTimeout(function(){
      window.location.reload();
  }, 100);
  }

  async function handleSignup(e) {
    e.preventDefault();

    const response = await fetch(`/users`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(signupData)
    });
    const data = await response.json();
    if(response.ok) {
      setCurrentUser(data)
      window.localStorage.setItem("isLoggedIn", true)
      handleReload()
    } else {
      setErrors(data.errors)
    }
  }

  function handleChange(e) {
    const key = e.target.name
      setSignupData({
        ...signupData, 
        [key]: e.target.value
      })
  }

  return (
    <div>
      <form onSubmit={handleSignup}>
      <label class="block text-gray-700 text-lg font-bold mb-1 mx-8 mt-6" for="username">username</label>
        <input
          type="text"
          name="username"
          value={signupData.username}
          id="username1"
          onChange={handleChange}
          placeholder="Username"
          class=" text-black  font-bold input input-bordered w-full max-w-xs my-2 mx-8 py-2 rounded-md bg-gray-200"
        />
        <br />
        <label class="block text-gray-700 text-lg font-bold mb-1 mx-8" for="password">Password</label>
          <input
          type="password"
          name="password"
          value={signupData.password}
          id="password1"
          onChange={handleChange}
          placeholder="Password"
          class=" text-black  font-bold input input-bordered w-full max-w-xs my-2 mx-8 py-2 rounded-md bg-gray-200"
        />
        <br />
        <label class="block text-gray-700 text-lg font-bold mb-1 mx-8" for="email1">Email</label>
        <input
          type="text"
          name="email"
          value={signupData.email}
          id="email1"
          onChange={handleChange}
          placeholder="Email"
          class=" text-black  font-bold input input-bordered w-full max-w-xs my-2 mx-8 py-2 rounded-md bg-gray-200"
        />

        {errors.length > 0 && (
          <ul >
            {errors.map((error) => (
              <ul
                key={error}
                class="bg-red-300 mx-2 my-1 rounded-lg p-2"
              >
                <li class="mx-5">ⓧ  {error}</li>
              </ul>
            ))}
          </ul>
        )}
        <br />
        <button 
          class="btn bg-emerald-900 bg-opacity-20 rounded-md px-2 mx-8 my-4" type="submit"
        > Create Account </button>
      </form>
    </div>
  )

}


export default Signup;