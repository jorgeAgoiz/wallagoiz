import useSWR from 'swr'
import { fetcher, SERVER_URL_FASTAPI } from '../constants/index'

export const useGetUser = (userId) => {
  const { data, error } = useSWR(`${SERVER_URL_FASTAPI}/user/${userId}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

/* Ahora necesitamos continuar aqui, gestionando esta llamada a la API
- Pasarle el token a SWR como argumento */
