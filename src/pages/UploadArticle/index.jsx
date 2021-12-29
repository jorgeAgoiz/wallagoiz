import { Grid, Typography } from '@mui/material'
import React from 'react'
import { styleProps } from './styles'

const UploadArticle = () => {
  return (
    <Grid item xs={12} sm={10} md={8} marginTop={5} sx={styleProps}>
      <Typography variant='h4' textAlign='center'>Subir Articulo</Typography>
    </Grid>
  )
}

export default UploadArticle
/* Continuaremos aqui, con el formulario para añadir articulos */
