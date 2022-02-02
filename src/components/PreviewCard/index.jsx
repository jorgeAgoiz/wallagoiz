import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { UserContext } from '../../context/UserContext'
import { styleProps, stylePropsCardActions } from './styles'
import { useNavigate } from 'react-router-dom'
import FavIcon from '../FavIcon'

const PreviewCard = ({ picture, title, price, id }) => {
  const { userLog } = useContext(UserContext)
  const navigate = useNavigate()

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
        <FavIcon articleId={id} userId={userLog.id} logged={userLog.logged} />
      </CardActions>
    </Card>
  )
}

export default PreviewCard

/*
  Hay que seguir implementando todo el contexto de favoritos, habrá
  que elegir si hacerlo con un contexto react o con SWR
*/
