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

const PreviewCard = () => {
  const { userLog: { logged } } = useContext(UserContext)
  const favorite = false// En función de si es favorito para el usuario

  return (
    <Card sx={styleProps}>
      <CardMedia
        component='img'
        height='180'
        image='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b5b7e7b-002f-4b66-9345-c222f7d18536/elite-tournament-basketball-size-6-and-7-76nlqt.png'
        alt='Basketball baloon'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Basketball baloon
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          43 Euros
        </Typography>
      </CardContent>
      <CardActions sx={stylePropsCardActions}>
        <Button size='small'>Detalles</Button>
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
