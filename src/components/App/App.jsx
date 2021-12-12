import React from 'react'
import { Container } from '@mui/material'
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

function App () {
  return (
    <Container sx={bgColor}>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App

/* Aqui quizá tanto el componente searchbar como previewlist meterlo en otro componente aparte
envuelto en un Fragment */
