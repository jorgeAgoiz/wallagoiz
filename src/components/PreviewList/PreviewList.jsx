import React from 'react'
import { Box } from '@mui/material'

const styleProps = {
  border: '3px solid black',
  backgroundColor: 'white',
  gridColumn: '1 / 7',
  gridRow: '4 / 5'

}

const PreviewList = () => {
  return (
        <Box sx={styleProps}>
            Hola que tal
        </Box>
  )
}

export default PreviewList
