import useSWR from 'swr'
import { fetcher, SERVER_URL_FASTAPI } from '../constants/index'

export const useArticlesSwr = () => {
  const { data, error, mutate } = useSWR(`${SERVER_URL_FASTAPI}/articles`, fetcher)

  return {
    articles: data,
    setArticles: mutate,
    isLoading: !error && !data,
    isError: error
  }
}
