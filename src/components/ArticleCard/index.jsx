import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import {
  styleMediaPic,
  stylePropsSeller,
  stylePriceTitle,
  styleDescription,
  styleLocationCreated
} from './styles'
import FavIcon from '../FavIcon'

const ArticleCard = ({ article }) => {
  const [fav, setFav] = useState()
  console.log(article)

  return (
    <>
      <Typography variant='h5'>
        Detalles
      </Typography>
      <Box sx={stylePropsSeller}>
        <Typography variant='subtitle1'>
          Nombre Vendedor
        </Typography>
        <Rating name='read-only' value={4} readOnly />
        <IconButton color='primary' onClick={() => setFav(!fav)}>
          <FavIcon isFav={fav} />
        </IconButton>
        <Button variant='contained' color='success' size='large'>
          Abrir Chat
        </Button>
      </Box>
      <CardMedia
        component='img'
        height='460'
        image={article.picture}
        alt={article.title}
        sx={styleMediaPic}
      />
      <Box sx={stylePriceTitle}>
        <Typography variant='h4'>
          {article.price} Euros
        </Typography>
        <Typography variant='h6'>
          {article.title}
        </Typography>
      </Box>
      <Box sx={styleDescription}>
        <Typography variant='body1'>
          {article.description}
        </Typography>
      </Box>
      <Box sx={styleLocationCreated}>
        <Typography variant='subtitle2'>
          En venta desde {article.created_at}
        </Typography>
        <Typography variant='subtitle2'>
          Ubicación del articulo
        </Typography>
      </Box>
    </>
  )
}

export default ArticleCard
/* Aqui tenemos que darles funcionalidades */
