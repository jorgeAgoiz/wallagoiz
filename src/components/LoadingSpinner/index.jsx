import React from 'react'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const LoadingSpinner = () => {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction='row'>
      <CircularProgress color='success' />
    </Stack>
  )
}

export default LoadingSpinner
/* Aqui tenemos que darle estilos
https://mui.com/components/progress/
*/
