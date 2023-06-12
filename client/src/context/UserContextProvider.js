import React, { useState, useEffect} from "react"

const UserContext = React.createContext();

function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({
    expenses: []
  })

  useEffect(() => {
    fetch('/auth')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => console.log(" from context", user))
      }
    })
  }, [])

  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE', 
    })
    .then(()=> setCurrentUser({
      expenses: []
    }))
  }

return (
  <UserContext.Provider value={{
    currentUser
  }}>
      { children }
  </UserContext.Provider>
)

}

export { UserContext, UserContextProvider};