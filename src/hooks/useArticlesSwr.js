import useSWR from 'swr'
import { fetcher } from '../constants/index'

export const useArticlesSwr = () => {
  const { data, error, mutate } = useSWR('http://localhost:3012/articles', fetcher)

  return {
    articles: data,
    setArticles: mutate,
    isLoading: !error && !data,
    isError: error
  }
}
/* Hook reutilizable para hacer las llamadas a los datos.
- Por defecto la key se pasa al fetcher como argumento
- https://swr.vercel.app/es-ES/docs/arguments
 */
