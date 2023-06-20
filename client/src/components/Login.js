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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginData.username}
          id="username"
          onChange={handleChange}
          placeholder="Username"
          className="auth-field"
        />
        <br />
        <input
        type="password"
        name="password"
        value={loginData.password}
        id="password"
        onChange={handleChange}
        placeholder="Password"
        className="auth-field"
      />
      <br />
      <button  className='login-btn' type="submit">Log In</button>
        {errors ? (
          <ul className='error-messages' key={errors.login}>
          <li>{errors.login}</li>
          </ul>
          ): 
          null
        }
      </form>
    </div>
  )

}

export default Login;