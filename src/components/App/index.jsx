import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Grid } from '@mui/material'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'
import Home from '../../pages/Home'
import SignUp from '../../pages/SignUp'
import SignIn from '../../pages/SignIn'
import NotFound from '../../pages/NotFound'
import { styleProps } from './styles'
import useUserData from '../../hooks/useUserData'

function App () {
  const { userLog } = useUserData()
  console.log(userLog)

  return (
    <Grid container sx={styleProps}>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/error' element={<NotFound />} />
        </Routes>
      </Router>
    </Grid>
  )
}

export default App
