import React from 'react'
import { Box } from '@mui/material'
import PreviewCard from '../PreviewCard/PreviewCard'
import { styleProps } from './styles'

const PreviewList = () => {
  return (
    <Box sx={styleProps}>
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
    </Box>
  )
}

export default PreviewList
