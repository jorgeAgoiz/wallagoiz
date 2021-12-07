import React from 'react'
import { Box } from '@mui/material'
import PreviewCard from '../PreviewCard/PreviewCard'

const styleProps = {
  backgroundColor: 'transparent',
  gridColumn: '1 / 7',
  display: 'grid',
  gridAutoRows: '21rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
  gap: '1rem',
  padding: '1rem'
}

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
