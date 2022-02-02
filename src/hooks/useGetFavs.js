import { useContext, useEffect } from 'react'
import { FavContext } from '../context/FavContext'
import { getFavs } from '../services/getFavs'

export const useGetFavs = ({ logged }) => {
  const { favs, setFavs } = useContext(FavContext)

  useEffect(() => {
    if (logged) {
      /* global sessionStorage */
      const token = sessionStorage.getItem('token')
      getFavs({ token })
        .then(results => {
          return setFavs(results)
        })
        .catch(err => console.log(err))
    }
  }, [logged])

  return { favs }
}
