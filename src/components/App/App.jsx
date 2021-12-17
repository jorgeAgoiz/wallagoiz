import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import Home from '../../pages/Home'
import SignUp from '../../pages/SignUp'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { bgColor } from './styles'
import SignIn from '../../pages/SignIn'
import { UserContext } from '../../context/UserContext'
import NotFound from '../../pages/NotFound'
import Account from '../../pages/Account'

function App () {
  const { userLog } = useContext(UserContext)
  console.log(userLog)
  /* N4 - Implementaciones:
  - Renderizado condiconal de rutas en función de si el UserContext
  - Creación de una pagina 404 Error para derivar alli cualquier problema tecnico
   */
  return (
    <Grid container sx={bgColor} rowSpacing={2}>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/account' element={userLog.logged ? <Account /> : <Home />} />
          <Route exact path='/error' element={<NotFound />} />
        </Routes>
      </Router>
    </Grid>
  )
  /* ************************************************************** */
}

export default App
