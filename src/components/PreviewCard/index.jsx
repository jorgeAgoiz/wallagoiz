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

  const onHandleDetails = () => {
    return navigate(`/details/${id}`)
  }

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
        <Button
          size='small'
          onClick={onHandleDetails}
          disabled={!userLog.logged}
        >
          Detalles
        </Button>
        <FavIcon articleId={id} userId={userLog.id} logged={!userLog.logged} />
      </CardActions>
    </Card>
  )
}

export default PreviewCard
