import { useContext, useEffect } from 'react'
import { FavContext } from '../context/FavContext'
import { getFavs } from '../services/getFavs'

export const useGetFavs = ({ logged }) => {
  const { favs, setFavs } = useContext(FavContext)
  /* global sessionStorage */
  const token = sessionStorage.getItem('token')
  useEffect(() => {
    if (logged) {
      getFavs({ token })
        .then(results => {
          const favs = results.map(f => {
            f.isFav = true
            return f
          })

          return setFavs(favs)
        })
        .catch(err => console.log(err))
    }
  }, [logged, token])

  return { favs }
}
