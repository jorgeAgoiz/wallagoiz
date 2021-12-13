import React from 'react'
import { Grid } from '@mui/material'
import PreviewCard from '../../components/PreviewCard/PreviewCard'
import { styleProps } from './styles'

const Home = () => {
  return (
    <Grid item xs={12} sx={styleProps}>
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
    </Grid>
  )
}

export default Home
