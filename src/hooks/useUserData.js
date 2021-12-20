import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { RefreshAuth } from '../services/createUser'

const useUserData = () => {
  const { userLog, setUserLog } = useContext(UserContext)
  const id = sessionStorage.getItem('id')

  useEffect(() => {
    /* global sessionStorage */
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
