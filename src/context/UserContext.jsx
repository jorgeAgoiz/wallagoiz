import React, { useState, createContext } from 'react'

export const userDataState = {
  name: null,
  lastName: null,
  location: null,
  profilePic: null,
  email: null,
  id: null,
  logged: false
}

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [userLog, setUserLog] = useState(userDataState)

  return (
    <UserContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </UserContext.Provider>
  )
}
