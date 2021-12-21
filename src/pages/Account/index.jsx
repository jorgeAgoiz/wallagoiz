import { Grid, Typography } from '@mui/material'
import React from 'react'
import AccountPersonal from '../../components/AccountPersonal/AccountPersonal'
import { styleProps } from './styles'

const Account = () => {
  return (
    <Grid item xs={12} md={11} sx={styleProps}>
      <Typography variant='h4' component='div' gutterBottom>
        Cuenta
      </Typography>
      <AccountPersonal />
    </Grid>
  )
}

export default Account
