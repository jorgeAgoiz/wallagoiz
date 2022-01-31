import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { createFav } from '../../services/createFav'
import { deleteFav } from '../../services/deleteFav'

const FavIcon = ({ isFav, userId, articleId }) => {
  const addFav = async (evt) => {
    const result = await createFav({ userId, articleId })
    console.log(result)
  }
  const removeFav = async (evt) => {
    const result = await deleteFav({ userId, articleId })
    console.log(result)
  }

  return isFav
    ? <FavoriteIcon onClick={removeFav} />
    : <FavoriteBorderIcon onClick={addFav} />
}

export default FavIcon

/* Lo dejaremos aqui, la fake api solo permite borrar con el id del fav
creado por ella misma. Quiza deba plantearme empezar a implementar mi REST API
creada con fastapi */
