import React, { useState, useEffect} from "react"

const UserContext = React.createContext();

function UserContextProvider( { children } ) {
  const [currentUser, setCurrentUser] = useState({

  })

  useEffect(() => {
    fetch('/auth')
    .then(resp => {
      if (resp.ok){
        resp.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  function handleLogout() {
    fetch("/logout", {
      method: 'DELETE', 
    })
    .then(()=> setCurrentUser({}))
  }

return (
  <UserContext.Provider value={{
    currentUser,
    setCurrentUser, 
    handleLogout
  }}>
      { children }
  </UserContext.Provider>
)

}

export { UserContext, UserContextProvider};