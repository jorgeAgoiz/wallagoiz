import { Grid, Typography } from '@mui/material'
import React from 'react'
import { stylePropsPersonal } from './styles'

const AccountPersonal = () => {
  return (
    <Grid item sx={stylePropsPersonal}>
      <Typography variant='h3' component='div'>
        Cuenta
      </Typography>
      <Typography variant='h3' component='div'>
        Cuenta
      </Typography>
    </Grid>
  )
}

export default AccountPersonal
