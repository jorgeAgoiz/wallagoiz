import useSWR from 'swr'
import { fetcherWithToken, SERVER_URL_FASTAPI } from '../constants/index'

export const useUserArticles = ({ userId, token }) => {
  const { data, error, mutate } = useSWR([`${SERVER_URL_FASTAPI}/article`, token], fetcherWithToken)

  return {
    articles: data,
    setArticle: mutate,
    isLoading: !error && !data,
    isError: error
  }
}

/* Debemos modificar este endpoint de la REST API:
  - Opción de pasar un id de usuario para traer los productos del
  usuario en cuestion.
  - Habra que modificar la REST API e igual crear un nuevo servicio.
*/
