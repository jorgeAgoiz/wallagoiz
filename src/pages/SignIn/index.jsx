import { Grid } from '@mui/material'
import React from 'react'
import SignInForm from '../../components/SignInForm'
import { styleProps } from './styles'

const SignIn = () => {
  return (
    <Grid item xs={12} sm={8} md={6} sx={styleProps} marginTop={2}>
      <SignInForm />
    </Grid>
  )
}

export default SignIn
