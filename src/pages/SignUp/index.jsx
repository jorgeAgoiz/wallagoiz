import React from 'react'
import { Grid } from '@mui/material'
import { styleProps } from './styles'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

const SignUp = () => {
  return (
    <Grid item xs={12} sm={8} md={7} sx={styleProps}>
      <SignUpForm />
    </Grid>
  )
}

export default SignUp
