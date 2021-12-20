import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const SubmitButton = ({ isSubmitting, styles, Icon, text }) => {
  return !isSubmitting
    ? (
      <Button
        type='submit'
        variant='contained'
        sx={styles}
        color='success'
        endIcon={<Icon />}
      >
        {text}
      </Button>)
    : (
      <LoadingButton
        loading
        loadingPosition='end'
        endIcon={<SaveIcon />}
        variant='outlined'
      >
        Iniciando sesión
      </LoadingButton>)
}

export default SubmitButton
