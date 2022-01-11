import useSWR from 'swr'
import { fetcher } from '../constants/index'

export const useUserArticles = (userId) => {
  const { data, error, mutate } = useSWR(`http://localhost:3012/articles?userId=${userId}`, fetcher)

  return {
    articles: data,
    setArticle: mutate,
    isLoading: !error && !data,
    isError: error
  }
}
