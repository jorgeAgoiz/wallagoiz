import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'
import { fieldsDataPassword } from '../../constants'
import TextFieldWrapper from '../TextfieldWrapper'
import SubmitButton from '../SubmitButton'
import { stylePropsForm, stylePropsFields, stylePropsTf } from './styles'
/* import { fieldsDataPassword } from '../../constants' */

/* Valores por defecto del Form */
const defaultValues = {
  password: '',
  newPassword: '',
  confirmNewPassword: ''
}
/* Esquema de validación del Form */
const schemaChangePassword = yup.object({
  password: yup.string().required('Requerido'),
  newPassword: yup.string().required('Requerido'),
  confirmNewPassword: yup.string().required('Requerido')
})

const DialogFormPassword = ({ open, handleClose }) => {
  /* React-hook-form */
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues, resolver: yupResolver(schemaChangePassword) })

  /* Función cerrar Dialog */
  const handleCloseCancel = () => {
    handleClose()
    return reset(defaultValues)
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  /* Renderizado de los campos del formulario */
  const fieldsToRender = () => {
    return fieldsDataPassword.map((field) => {
      return (
        <TextFieldWrapper
            key={field.id}
            control={control}
            errors={errors}
            name={field.name}
            label={field.label}
            type='password'
            stylePropsTf={stylePropsTf}
            autoFocus
            margin="dense"
        />
      )
    }
    )
  }

  return (
    <>
        <Dialog open={open} onClose={handleClose}>
            <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={stylePropsForm}>
                <DialogTitle sx={{ textAlign: 'center' }}>Cambiar Password</DialogTitle>
                <DialogContent sx={stylePropsFields}>
                      {
                          fieldsToRender()
                      }
                </DialogContent>
                <DialogActions>
                    <SubmitButton isSubmitting={isSubmitting} text='Modificar' altText='Guardando' Icon={SaveIcon} />
                    <Button onClick={handleCloseCancel} variant='contained' color='error'>Cancelar</Button>
                </DialogActions>
            </Box>
        </Dialog>
    </>
  )
}

export default DialogFormPassword

/* Continuaremos aqui estilando el Dialog formulario para cambiar el password */
