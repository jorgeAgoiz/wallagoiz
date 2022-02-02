import React, { useContext, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import { createFav } from '../../services/createFav'
import { deleteFav } from '../../services/deleteFav'
import { FavContext } from '../../context/FavContext'
import { getFavs } from '../../services/getFavs'

const FavIcon = ({ userId, articleId, logged }) => {
  /* global sessionStorage */
  const token = sessionStorage.getItem('token')
  const { favs, setFavs } = useContext(FavContext)
  const [fav, setFav] = useState()

  const addFav = async (evt) => {
    try {
      const result = await createFav({ userId, articleId, token })
      if (result !== 201) {
        throw new Error('Something went wrong')
      }
      const newFavList = await getFavs({ token })
      setFavs(newFavList)

      return setFav(true)
    } catch (error) {
      console.log(error)
      /* Aqui podriamos implementar los toast de confirmacion */
    }
  }
  const removeFav = async (evt) => {
    try {
      const result = await deleteFav({ userId, articleId, token })
      if (result === 204) {
        return setFav(false)
        /* Aqui podriamos implementar los toast de confirmacion */
      }
      return
    } catch (error) {
      console.log('Something went wrong')
      console.log(error)
      /* Aqui podriamos implementar los toast de confirmacion */
    }
  }

  return (
    <IconButton color='primary' disabled={logged} onClick={fav ? removeFav : addFav}>
      {
      fav
        ? <FavoriteIcon />
        : <FavoriteBorderIcon />
      }
    </IconButton>

  )
}

export default FavIcon

/* Seguiremos aqui implementando los favs de artículos */
