import React from 'react'
import { Container } from '@mui/material'
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar'
import PreviewList from './components/PreviewList/PreviewList'

const bgColor = {
  bgcolor: '#bedd9a',
  color: '#aed581',
  p: 2,
  boxShadow: 3,
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: 2,
  alignContent: 'center',
  justifyContent: 'center'
}

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
