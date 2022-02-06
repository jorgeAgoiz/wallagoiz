import { Grid, Typography } from '@mui/material'
import React from 'react'
import { styleProps } from './styles'

const Chat = () => {
  return (
    <Grid item xs={12} sm={10} md={10} marginTop={3} sx={styleProps}>
      <Typography variant='h2'>Chat de contacto</Typography>
    </Grid>

  )
}

export default Chat

/* Aqui implementaría un chat */
