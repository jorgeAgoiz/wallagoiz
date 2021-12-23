import { Grid, Typography } from '@mui/material'
import React from 'react'
import AccountInfo from '../../components/AccountInfo'
import AccountPersonal from '../../components/AccountPersonal'
import { styleProps } from './styles'

const Account = () => {
  return (
    <Grid item xs={12} md={11} sx={styleProps}>
      <Typography variant='h4' component='div' gutterBottom>
        Cuenta
      </Typography>
      <AccountPersonal />
      <AccountInfo />
    </Grid>
  )
}

export default Account
