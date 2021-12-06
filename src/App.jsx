import React from 'react'
import { Container } from '@mui/material'
import NavBar from './components/NavBar/NavBar'

const bgColor = {
  bgcolor: 'success.main',
  color: 'success.contrastText',
  p: 2,
  boxShadow: 3
}

function App () {
  return (
    <Container sx={bgColor}>
      <NavBar />
    </Container>
  )
}

export default App
