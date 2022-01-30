import React, { useState, createContext } from 'react'

export const userDataState = {
  id: null,
  name: null,
  lastName: null,
  location: null,
  profilePic: null,
  email: null,
  birthday: null,
  gender: null,
  rating: null,
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
