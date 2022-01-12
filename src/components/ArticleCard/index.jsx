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
import { useGetUser } from '../../hooks/useGetUser'
import { useNavigate } from 'react-router-dom'

const ArticleCard = ({ articleData }) => {
  const { user, isLoading, isError } = useGetUser(articleData.userId)
  const [fav, setFav] = useState()
  const navigate = useNavigate()
  console.log(user)
  if (isError) return navigate('/error')

  return (
    <>
      <Typography variant='h5'>
        Detalles
      </Typography>
      <Box sx={stylePropsSeller}>
        <Typography variant='subtitle1'>
          {!isLoading && `${user[0].name} ${user[0].lastName}`}
        </Typography>
        {
          !isLoading && <Rating name='read-only' value={user[0].rating} readOnly />
        }
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
        image={articleData.picture}
        alt={articleData.title}
        sx={styleMediaPic}
      />
      <Box sx={stylePriceTitle}>
        <Typography variant='h4'>
          {articleData.price} Euros
        </Typography>
        <Typography variant='h6'>
          {articleData.title}
        </Typography>
      </Box>
      <Box sx={styleDescription}>
        <Typography variant='body1'>
          {articleData.description}
        </Typography>
      </Box>
      <Box sx={styleLocationCreated}>
        <Typography variant='subtitle2'>
          En venta desde {articleData.created_at}
        </Typography>
        <Typography variant='subtitle2'>
          Ubicación del articulo
        </Typography>
      </Box>
    </>
  )
}

export default ArticleCard
/* Puliendo los datos del usuario que ha creado el articulo,
en breve hay que darle funcionalidad al FavIcon */
