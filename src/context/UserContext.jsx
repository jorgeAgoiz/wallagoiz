import React, { useState, createContext } from 'react'

/* N2 - Hay que rediseñar los campos de este contexto */
const userData = {
  email: null,
  id: null,
  logged: false
}
// *****************************************************
export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [userLog, setUserLog] = useState(userData)

  return (
    <UserContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </UserContext.Provider>
  )
}
