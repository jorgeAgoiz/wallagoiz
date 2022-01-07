import useSWR from 'swr'
import { fetcher } from '../constants/index'

export const useArticleById = (id) => {
  const { data, error, mutate } = useSWR(`http://localhost:3012/articles?id=${id}`, fetcher)

  return {
    article: data,
    setArticle: mutate,
    isLoading: !error && !data,
    isError: error
  }
}
