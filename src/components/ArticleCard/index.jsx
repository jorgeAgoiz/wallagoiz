import React from 'react'
import Typography from '@mui/material/Typography'

const ArticleCard = ({ article }) => {
  console.log(article)

  return (
    <>
      <Typography variant='h4' gutterBottom>
        Detalles
      </Typography>
      <img src={article.picture} alt={article.title} />
    </>
  )
}

export default ArticleCard
/* Seguimos aqui dandole forma a los detalles del artículo */
