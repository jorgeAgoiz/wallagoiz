import React from 'react'
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

function App () {
  return (
    <Grid container sx={bgColor} rowSpacing={2}>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </Grid>
  )
}

export default App
/* Haremos renderizado condicional en algunas rutas en función de si el usuario esta autenticado */
