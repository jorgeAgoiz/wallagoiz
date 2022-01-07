import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { CardMedia, Grid, Typography, Button } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import errorImg from '../../images/errorImage.jpg'
import { styleProps, stylePropsImg } from './styles'

let themeResponsive = createTheme()
themeResponsive = responsiveFontSizes(themeResponsive)

const NotFound = () => {
  const navigate = useNavigate()

  const comeBack = () => {
    return navigate('/')
  }

  return (
    <Grid container sx={styleProps}>
      <ThemeProvider theme={themeResponsive}>
        <Typography variant='h3'>Algo ha ido mal...</Typography>
        <CardMedia component='img' src={errorImg} height='300px' width='300px' sx={stylePropsImg} />
        <Typography variant='h3'>404</Typography>
      </ThemeProvider>
      <Button variant='contained' color='success' size='large' onClick={comeBack}>
        Volver a inicio
      </Button>
    </Grid>
  )
}

export default NotFound
