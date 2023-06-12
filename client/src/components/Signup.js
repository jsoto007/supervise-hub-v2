import React, { useState } from "react";

function Signup() {

  const [signupData, setSignupData] = useState({
    username: "", 
    password: "",
    email: ""
  })

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
      console.log(data)
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
        <input
          type="text"
          name="username"
          value={signupData.username}
          id="username1"
          onChange={handleChange}
          placeholder="Username"
        />
          <input
          type="password"
          name="password"
          value={signupData.password}
          id="password1"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="email"
          value={signupData.email}
          id="email1"
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit"> Create Account </button>
      </form>
    </div>
  )

}


export default Signup;