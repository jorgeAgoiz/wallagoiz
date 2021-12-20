import { useSWR } from 'swr'

export const useQuerySwr = (queryKey, callbackFunc) => {
  const { data, error } = useSWR(queryKey, callbackFunc)

  return { data, error }
}
/* Hook reutilizable para hacer las llamadas a los datos.
- Por defecto la key se pasa al fetcher como argumento
- https://swr.vercel.app/es-ES/docs/arguments
 */
