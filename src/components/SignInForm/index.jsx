import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { styleProps, stylePropsButton } from './styles'

const SignInForm = () => {
  return (
    <>
      <Box component='form' style={styleProps}>
        <Typography variant='h5' marginBottom='1rem'>Iniciar sesión</Typography>
        <Button type='submit' variant='contained' sx={stylePropsButton} color='success' endIcon={<SendIcon />}>Enviar</Button>
      </Box>
    </>

  )
}

export default SignInForm

/* Empezar de cero con react-hook-form */
