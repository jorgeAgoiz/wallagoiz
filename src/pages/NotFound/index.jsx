import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import { styleProps, stylePropsIFrame } from './styles'

const NotFound = () => {
  return (
    <Grid container xs={12} sx={styleProps}>
      <h1>Not Found 404</h1>
      <CardMedia component='iframe' src='https://giphy.com/embed/H7wajFPnZGdRWaQeu0' height='420px' width='420px' sx={stylePropsIFrame} />
    </Grid>
  )
}
/* Seguimos diseñando esto */
export default NotFound
