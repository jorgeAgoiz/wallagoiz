import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import { createFav } from '../../services/createFav'
import { deleteFav } from '../../services/deleteFav'

const FavIcon = ({ userId, articleId, logged }) => {
  /* global sessionStorage */
  const token = sessionStorage.getItem('token')
  const [fav, setFav] = useState()

  const addFav = async (evt) => {
    try {
      const result = await createFav({ userId, articleId, token })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  const removeFav = async (evt) => {
    try {
      const result = await deleteFav({ userId, articleId, token })
      console.log(result)
    } catch (error) {
      console.log('Something went wrong')
      console.log(error)
    }
  }

  return (
    <IconButton color='primary' disabled={!logged} onClick={() => setFav(!fav)}>
      {
      fav
        ? <FavoriteIcon onClick={removeFav} />
        : <FavoriteBorderIcon onClick={addFav} />
      }
    </IconButton>

  )
}

export default FavIcon

/*
  Hay que seguir implementando todo el contexto de favoritos, habrá
  que elegir si hacerlo con un contexto react o con SWR
*/
