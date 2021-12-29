import React from 'react'
import { Grid } from '@mui/material'
import PreviewCard from '../../components/PreviewCard'
import { getArticles } from '../../services/getArticles'
import { styleProps } from './styles'
import { useNavigate } from 'react-router-dom'
import { useArticlesSwr } from '../../hooks/useQuerySwr'

const Home = () => {
  const navigate = useNavigate()
  const { articles, isLoading, isError } = useArticlesSwr('/articles', getArticles)

  if (isLoading) return <div>Cargando...</div>
  if (isError) return navigate('/error')

  return (
    <Grid item xs={12} sx={styleProps}>
      {
        articles.map(article => {
          return (
            <PreviewCard
              key={article.id}
              title={article.title}
              picture={article.picture}
              price={article.price}
            />
          )
        })
      }

    </Grid>
  )
}

export default Home
