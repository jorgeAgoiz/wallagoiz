import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'
import SubmitButton from '../SubmitButton'
import DialogFormFields from '../DialogFormFields'
import { updateUser } from '../../services/updateUser'
import { UserContext } from '../../context/UserContext'
import { fieldsDataEmail } from '../../constants/index'
import { stylePropsFields, stylePropsForm, stylePropsTf } from './styles'

/* Valores por defecto del Form */
const defaultValues = {
  email: '',
  confirmEmail: ''
}
/* Esquema de validación del Form */
const schemaChangeEmail = yup.object({
  email: yup.string().email().required('Requerido'),
  confirmEmail: yup.string().email().required('Requerido')
})

const DialogFormEmail = ({ open, handleClose }) => {
  /* Contexto */
  const { userLog, setUserLog } = useContext(UserContext)

  /* React-hook-form */
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues, resolver: yupResolver(schemaChangeEmail) })

  /* Función cerrar Dialog */
  const handleCloseCancel = () => {
    handleClose()
    return reset(defaultValues)
  }

  /* Función envio formulario */
  const onSubmit = async (data) => {
    if (data.email !== data.confirmEmail) {
      return setError('confirmEmail', {
        type: 'manual',
        message: 'El Email debe coincidir.'
      })
    }
    try {
      const result = await updateUser(userLog.id, { email: data.email })
      if (!result.id) {
        return console.log('Something went wrong.')
      }
      delete result.password
      result.logged = true
      setUserLog({ ...result })
      return handleCloseCancel()
    } catch (err) {
      console.log(err)
      return handleClose()
    }
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={stylePropsForm}>
          <DialogTitle sx={{ textAlign: 'center' }}>Cambiar Email</DialogTitle>
          <DialogContent sx={stylePropsFields}>
            <DialogFormFields
              data={fieldsDataEmail}
              control={control}
              errors={errors}
              stylePropsTf={stylePropsTf}
              type='text'
            />
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

export default DialogFormEmail
