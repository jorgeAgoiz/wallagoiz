import React from 'react'
import { Container } from '@mui/material'
import NavBar from './components/NavBar/NavBar'
import PreviewCard from './components/PreviewCard/PreviewCard'

const bgColor = {
  bgcolor: 'success.main',
  color: 'success.contrastText',
  p: 3,
  boxShadow: 3,
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(10, auto)',
  gap: 1
}
const stylePropsOne = {
  maxWidth: 345,
  gridColumn: '2 / 4',
  gridRow: '3 / 4'
}
const stylePropsTwo = {
  maxWidth: 345,
  gridColumn: '5 / 7',
  gridRow: '3 / 4'
}

function App () {
  return (
    <Container sx={bgColor}>
      <NavBar />
      <PreviewCard styleProps={stylePropsOne} />
      <PreviewCard styleProps={stylePropsTwo}/>
    </Container>
  )
}

export default App
