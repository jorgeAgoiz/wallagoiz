import { Grid } from '@mui/material'
import React from 'react'
import SignInForm from '../../components/SignInForm'
import { styleProps } from './styles'

const SignIn = () => {
  return (
    <Grid item xs={12} sm={10} md={8} sx={styleProps} marginTop={5}>
      <SignInForm />
    </Grid>
  )
}

export default SignIn
