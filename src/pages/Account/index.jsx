import { Grid, Typography } from '@mui/material'
import React from 'react'
import AccountPersonal from '../../components/AccountPersonal/AccountPersonal'
import { styleProps } from './styles'

const Account = () => {
  return (
    <Grid container xs={12} sx={styleProps}>
      <Typography variant='h3' component='div' gutterBottom>
        Cuenta
      </Typography>
      <AccountPersonal />
    </Grid>
  )
}

export default Account
