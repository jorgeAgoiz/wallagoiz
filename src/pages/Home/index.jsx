import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import PreviewCard from '../../components/PreviewCard'
import { getArticles } from '../../services/getArticles'
import { useArticlesSwr } from '../../hooks/useArticlesSwr'
import { styleProps } from './styles'

const Home = () => {
  const navigate = useNavigate()
  const { articles, isLoading, isError } = useArticlesSwr('/articles', getArticles)
  console.log(articles)// TODO: Provisional

  if (isLoading) return <div>Cargando...</div>// Aqui crearemos un Spinner de carga
  if (isError) return navigate('/error')

  return (
    <Grid item xs={12} sx={styleProps}>
      {
        articles.map(article => {
          return (
            <PreviewCard
              key={article.id}
              id={article.id}
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
