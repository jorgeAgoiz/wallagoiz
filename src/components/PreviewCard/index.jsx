import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { UserContext } from '../../context/UserContext'
import { styleProps, stylePropsCardActions } from './styles'
import { useNavigate } from 'react-router-dom'

const PreviewCard = ({ picture, title, price, id }) => {
  const { userLog: { logged } } = useContext(UserContext)
  const navigate = useNavigate()
  const favorite = false// En función de si es favorito para el usuario

  return (
    <Card sx={styleProps}>
      <CardMedia
        component='img'
        height='160'
        image={picture}
        alt='Basketball baloon'
      />
      <CardContent>
        <Typography gutterBottom variant='subtitle1' component='div'>
          {title}
        </Typography>
        <Typography variant='h6' color='black'>
          {price} Euros
        </Typography>
      </CardContent>
      <CardActions sx={stylePropsCardActions}>
        <Button size='small' onClick={() => navigate(`/details/${id}`)}>Detalles</Button>
        <Button size='small' disabled={!logged}>
          {
            favorite
              ? <FavoriteIcon />
              : <FavoriteBorderIcon />
          }
        </Button>
      </CardActions>
    </Card>
  )
}

export default PreviewCard
