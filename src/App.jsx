import React from 'react'
import { Container } from '@mui/material'
import NavBar from './components/NavBar/NavBar'
import PreviewCard from './components/PreviewCard/PreviewCard'
import PreviewList from './components/PreviewList/PreviewList'

const bgColor = {
  bgcolor: '#e3eb90',
  color: '#9aa151',
  p: 3,
  boxShadow: 3,
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: 2
}
const stylePropsOne = {
  maxWidth: 345,
  gridColumn: '1 / 3',
  gridRow: '3 / 4'
}
const stylePropsTwo = {
  maxWidth: 345,
  gridColumn: '3 / 5',
  gridRow: '3 / 4'
}
const stylePropsThree = {
  maxWidth: 345,
  gridColumn: '5 / 7',
  gridRow: '3 / 4'
}

function App () {
  return (
    <Container sx={bgColor}>
      <NavBar />
      <PreviewCard styleProps={stylePropsOne} />
      <PreviewCard styleProps={stylePropsTwo} />
      <PreviewCard styleProps={stylePropsThree} />
      <PreviewList />
    </Container>
  )
}

export default App
