import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { UserContextProvider } from './context/UserContext'
import { FavContextProvider } from './context/FavContext'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <FavContextProvider>
        <App />
      </FavContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
