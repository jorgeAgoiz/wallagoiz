import useSWR from 'swr'
import { fetcherWithToken, SERVER_URL_FASTAPI } from '../constants/index'

export const useArticleById = ({ id, token }) => {
  const { data, error, mutate } = useSWR([`${SERVER_URL_FASTAPI}/article?id=${id}`, token], fetcherWithToken)

  return {
    article: data,
    setArticle: mutate,
    isLoading: !error && !data,
    isError: error
  }
}
