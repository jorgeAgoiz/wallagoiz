import React from 'react'
import { Container } from '@mui/material'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import PreviewList from '../PreviewList/PreviewList'
import { bgColor } from './styles'

function App () {
  return (
    <Container sx={bgColor}>
      <NavBar />
      <SearchBar />
      <PreviewList />
    </Container>
  )
}

export default App
