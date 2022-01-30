import useSWR from 'swr'
import { fetcherWithToken, SERVER_URL_FASTAPI } from '../constants/index'

export const useGetUser = ({ userId }) => {
  /* global sessionStorage */
  const token = sessionStorage.getItem('token')
  const { data, error } = useSWR([`${SERVER_URL_FASTAPI}/users/${userId}`, token], fetcherWithToken)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
