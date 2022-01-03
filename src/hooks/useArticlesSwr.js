import useSWR from 'swr'

export const useArticlesSwr = (queryKey, callbackFunc) => {
  const { data, error, mutate } = useSWR(queryKey, callbackFunc)

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