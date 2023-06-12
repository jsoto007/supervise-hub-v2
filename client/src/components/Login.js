import react, { useState } from "react";

function Login() {

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
      console.log(data)
    }
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
        />
        <input
        type="password"
        name="password"
        value={loginData.password}
        id="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
      </form>
    </div>
  )

}

export default Login;