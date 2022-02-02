import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { getMyUserData } from '../services/getMyUserData'

const useUserData = () => {
  const { userLog, setUserLog } = useContext(UserContext)
  /* global sessionStorage */
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    if (token) {
      getMyUserData({ token })
        .then(result => {
          delete result.password
          return setUserLog({ ...result, logged: true })
        })
        .catch(err => {
          console.log(err)
          /* Manejo de errores */
        })
    }
  }, [])

  return { userLog }
}

export default useUserData
