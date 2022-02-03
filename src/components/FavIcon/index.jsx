import React, { useContext } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import { createFav } from '../../services/createFav'
import { deleteFav } from '../../services/deleteFav'
import { FavContext } from '../../context/FavContext'
import { getFavs } from '../../services/getFavs'
import { useIsFav } from '../../hooks/useIsFav'

const FavIcon = ({ userId, articleId, logged }) => {
  /* global sessionStorage */
  const token = sessionStorage.getItem('token')
  const { favs, setFavs } = useContext(FavContext)
  const { fav, setFav } = useIsFav({ articleId, favs })

  const addFav = async (evt) => {
    try {
      const result = await createFav({ userId, articleId, token })
      if (result !== 201) {
        throw new Error('Something went wrong.')
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
      if (result !== 204) {
        throw new Error('Something went wrong.')
        /* Aqui podriamos implementar los toast de confirmacion */
      }
      const newFavList = await getFavs({ token })
      if (newFavList.detail) {
        setFavs([])
        return setFav(false)
      }

      setFavs(newFavList)
      return setFav(false)
    } catch (error) {
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
