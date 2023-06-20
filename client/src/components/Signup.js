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
        <input
          type="text"
          name="username"
          value={signupData.username}
          id="username1"
          onChange={handleChange}
          placeholder="Username"
          className="auth-field"
        />
        <br />
          <input
          type="password"
          name="password"
          value={signupData.password}
          id="password1"
          onChange={handleChange}
          placeholder="Password"
          className="auth-field"
        />
        <br />
        <input
          type="text"
          name="email"
          value={signupData.email}
          id="email1"
          onChange={handleChange}
          placeholder="Email"
          className="auth-field"
        />

        {errors.length > 0 && (
          <ul className='error-messages'>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <br />
        <button className="create-acc-btn" type="submit"> Create Account </button>
      </form>
    </div>
  )

}


export default Signup;