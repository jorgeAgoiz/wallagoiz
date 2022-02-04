import React, { useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import PreviewCard from '../../components/PreviewCard'
import { styleProps, stackStyles } from './styles'
import { UserContext } from '../../context/UserContext'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useGetFavs } from '../../hooks/useGetFavs'

const MyFavorites = () => {
  const { userLog } = useContext(UserContext)
  const { favs } = useGetFavs({ logged: userLog.logged })

  if (!favs) return <LoadingSpinner stackStyle={stackStyles} />

  return (
    <>
      <Typography variant='h4' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Tus Favoritos
      </Typography>

      <Grid item xs={12} sx={styleProps}>
        {
              favs.map(fav => {
                return (
                  <PreviewCard
                    key={fav.articleId}
                    id={fav.articleId}
                    title={fav.title}
                    picture={fav.picture}
                    price={fav.price}
                  />
                )
              })
          }
      </Grid>
    </>

  )
}

export default MyFavorites

/* Modificar el backend para que nos devuelva un array vacio si no hay favoritos
 y modificar las excepciones HTTP */
