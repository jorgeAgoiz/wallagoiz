import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const FavIcon = ({ isFav }) => {
  return isFav
    ? <FavoriteIcon />
    : <FavoriteBorderIcon />
}

export default FavIcon
