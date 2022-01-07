import React from 'react'
import { Grid } from '@mui/material'
import SignUpForm from '../../components/SignUpForm'
import { styleProps } from './styles'

const SignUp = () => {
  return (
    <Grid item xs={12} sm={10} md={8} sx={styleProps} marginTop={5}>
      <SignUpForm />
    </Grid>
  )
}

export default SignUp
