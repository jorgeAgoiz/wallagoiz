import React from 'react'
import { Grid, Typography } from '@mui/material'
import PreviewCard from '../../components/PreviewCard'
import { styleProps } from './styles'

const MyProducts = () => {
  return (
    <>
      <Typography variant='h4' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Tus Productos
      </Typography>

      <Grid item xs={12} sx={styleProps}>
        <PreviewCard
          key={12}
          id={12}
          title='Junta de Trocola'
          picture='https://images.unsplash.com/photo-1429772011165-0c2e054367b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          price='3490'
        />
        <PreviewCard
          key={12}
          id={12}
          title='Junta de Trocola'
          picture='https://images.unsplash.com/photo-1429772011165-0c2e054367b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          price='3490'
        />
        <PreviewCard
          key={12}
          id={12}
          title='Junta de Trocola'
          picture='https://images.unsplash.com/photo-1429772011165-0c2e054367b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          price='3490'
        />
        <PreviewCard
          key={12}
          id={12}
          title='Junta de Trocola'
          picture='https://images.unsplash.com/photo-1429772011165-0c2e054367b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          price='3490'
        />
      </Grid>
    </>

  )
}

export default MyProducts

/* Sigo aqui implementando la llamada a la api */
