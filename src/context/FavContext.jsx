import React, { useState, createContext } from 'react'

export const FavContext = createContext({})

export const FavContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([])

  return (
    <FavContext.Provider value={{ favs, setFavs }}>
      {children}
    </FavContext.Provider>
  )
}
