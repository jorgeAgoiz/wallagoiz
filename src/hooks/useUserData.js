import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { RefreshAuth } from '../services/refreshAuth'

const useUserData = () => {
  const { userLog, setUserLog } = useContext(UserContext)
  /* global sessionStorage */
  const id = sessionStorage.getItem('id')

  useEffect(() => {
    if (id) {
      RefreshAuth({ id })
        .then(result => {
          delete result[0].password
          return setUserLog({ ...result[0], logged: true })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  return { userLog }
}

export default useUserData
