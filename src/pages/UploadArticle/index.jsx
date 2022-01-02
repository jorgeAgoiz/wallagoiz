import { Grid, Typography } from '@mui/material'
import React from 'react'
import ArticleForm from '../../components/ArticleForm'
import { styleProps } from './styles'

const UploadArticle = () => {
  return (
    <Grid item xs={12} sm={10} md={8} marginTop={3} sx={styleProps}>
      <Typography variant='h4' textAlign='center'>Subir Articulo</Typography>
      <ArticleForm />
    </Grid>
  )
}

export default UploadArticle
/* Continuaremos aqui, con el formulario para añadir articulos */
