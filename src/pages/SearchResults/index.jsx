import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import PreviewCard from '../../components/PreviewCard'
import { styleProps, stackStyles } from './styles'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useArticlesSwr } from '../../hooks/useArticlesSwr'

const SearchResults = () => {
  const navigate = useNavigate()
  const { word } = useParams()
  const { articles, isLoading, isError } = useArticlesSwr()
  const [results, setResults] = useState([])

  if (isLoading) return <LoadingSpinner stackStyle={stackStyles} />
  if (isError) return navigate('/error')

  useEffect(() => {
    const searchResults = articles.filter(art => {
      if (art.title.toUpperCase().includes(word.toUpperCase())) {
        return true
      }
      return false
    })
    return setResults(searchResults)
  }, [word])

  return (
    <>
      <Typography variant='h4' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Tus Resultados
      </Typography>

      <Grid item xs={12} sx={styleProps}>
        {
              results.map(article => {
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
    </>

  )
}

export default SearchResults
