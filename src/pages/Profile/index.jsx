import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import ProfileData from '../../components/ProfileData'
import ProfilePicture from '../../components/ProfilePicture'
import { styleProps, stylePropsBoxInputs } from './styles'

let themeResponsive = createTheme()
themeResponsive = responsiveFontSizes(themeResponsive)

const Profile = () => {
  return (
    <Grid item xs={12} md={11} sx={styleProps}>
      <ThemeProvider theme={themeResponsive}>
        <Typography variant='h4' textAlign='center' component='div'>
          Información de Perfil
        </Typography>
      </ThemeProvider>
      <Box sx={stylePropsBoxInputs}>
        <ProfilePicture />
        <ProfileData />
      </Box>
    </Grid>
  )
}

export default Profile
