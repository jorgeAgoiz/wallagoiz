import React from 'react'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const LoadingSpinner = ({ stackStyle }) => {
  return (
    <Stack sx={stackStyle} spacing={2} direction='row'>
      <CircularProgress color='success' size={100} />
    </Stack>
  )
}

export default LoadingSpinner
/* Aqui tenemos que darle estilos
https://mui.com/components/progress/
*/
