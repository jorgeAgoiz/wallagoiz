import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleCard from '../../components/ArticleCard'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useArticleById } from '../../hooks/useArticleById'
import { styleProps, stackStyles } from './styles'

const ArticleDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { article, isError, isLoading } = useArticleById(id)

  if (isError) return navigate('/error')

  return (
    <Grid item xs={12} sm={11} md={9} lg={7} sx={styleProps}>
      {
            isLoading
              ? <LoadingSpinner stackStyle={stackStyles} />
              : <ArticleCard article={article[0]} />
        }
    </Grid>
  )
}

export default ArticleDetails
/* Este componente detenidamente quiero pensar en su comportamiento al hacer el fetch
de los datos. */
