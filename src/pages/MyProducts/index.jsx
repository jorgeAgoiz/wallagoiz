import React, { useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import PreviewCard from '../../components/PreviewCard'
import { useUserArticles } from '../../hooks/useUserArticles'
import { styleProps, stackStyles } from './styles'

import { UserContext } from '../../context/UserContext'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useNavigate } from 'react-router-dom'

const MyProducts = () => {
  const navigate = useNavigate()
  const { userLog } = useContext(UserContext)
  const { articles, isLoading, isError } = useUserArticles(userLog.id)

  if (isLoading) return <LoadingSpinner stackStyle={stackStyles} />
  if (isError) return navigate('/error')

  return (
    <>
      <Typography variant='h4' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Tus Productos
      </Typography>

      <Grid item xs={12} sx={styleProps}>
        {
              articles.map(article => {
                return (
                  <PreviewCard
                    key={article.id}
                    id={article.id}
                    title={articles.title}
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

export default MyProducts

/* Aqui hay que limpiar el código */
