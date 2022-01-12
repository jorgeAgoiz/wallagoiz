import useSWR from 'swr'
import { fetcher } from '../constants/index'

export const useGetUser = (userId) => {
  const { data, error } = useSWR(`http://localhost:3012/users?id=${userId}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
