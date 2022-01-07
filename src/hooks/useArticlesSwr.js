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
/*
Custom Hook con SWR para el fetch de artículos, adjunto enlace a la documentación:
https://swr.vercel.app/es-ES/docs/arguments
 */
