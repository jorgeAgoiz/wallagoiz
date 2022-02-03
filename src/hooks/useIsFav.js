import { useEffect, useState } from 'react'
import useUserData from './useUserData'

export const useIsFav = ({ articleId, favs }) => {
  const { userLog: { logged } } = useUserData()
  const [fav, setFav] = useState()

  useEffect(() => {
    const result = favs.find(f => f.articleId === articleId)

    if (!result) {
      return setFav(false)
    }
    return setFav(true)
  }, [articleId, favs, logged])

  return { fav, setFav }
}

/* Parece que ya funciona correcto */
