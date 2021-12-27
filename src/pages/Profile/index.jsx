import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ProfileData from '../../components/ProfileData'
import ProfilePicture from '../../components/ProfilePicture'
import { styleProps, stylePropsBoxInputs } from './styles'

const Profile = () => {
  return (
    <Grid item xs={12} md={11} sx={styleProps}>
      <Typography variant='h4' textAlign='center' component='div'>
        Información de Perfil
      </Typography>
      <Box sx={stylePropsBoxInputs}>
        <ProfilePicture />
        <ProfileData />
      </Box>
    </Grid>
  )
}

export default Profile
/*
    - Crear un componente de form para cambiar la foto de perfil
    - Crear un componente de form para cambiar nombre, apellidos y ubicación
*/
