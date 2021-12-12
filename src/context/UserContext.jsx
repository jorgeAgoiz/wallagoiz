import React, { useState, createContext } from 'react'

const userData = {
  username: null,
  id: null,
  logged: false
}

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [userLog, setUserLog] = useState(userData)

  return (
    <UserContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </UserContext.Provider>
  )
}
/* Hay que rediseñar este contexto */
