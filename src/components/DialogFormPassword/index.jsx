import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { UserContext } from '../../context/UserContext'
import { fieldsDataPassword } from '../../constants'
import { updateUser } from '../../services/updateUser'
import { SignInUser } from '../../services/signInUser'
import { stylePropsForm, stylePropsFields, stylePropsTf } from './styles'
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
  const { userLog } = useContext(UserContext)
  const navigate = useNavigate()
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

  /* Función envio formulario */
  const onSubmit = async (data) => {
    try {
      const exists = await SignInUser({ email: userLog.email, password: data.password })
      if (!exists[0]) {
        return setError('password', {
          type: 'manual',
          message: 'Contraseña invalida.'
        })
      }
      if (exists[0].password === data.newPassword) {
        return setError('newPassword', {
          type: 'manual',
          message: 'Utilice una contraseña nueva.'
        })
      }
      if (data.newPassword !== data.confirmNewPassword) {
        return setError('confirmNewPassword', {
          type: 'manual',
          message: 'Las nuevas contraseñas deben coincidir.'
        })
      }
      const updated = await updateUser(userLog.id, { password: data.newPassword })
      if (!updated.id) {
        console.log('Something went wrong.')
        handleClose()
        return navigate('/error')
      }
      return handleCloseCancel()
    } catch (err) {
      console.log(err)
      handleClose()
      return navigate('/error')
    }
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={stylePropsForm}>
          <DialogTitle sx={{ textAlign: 'center' }}>Cambiar Contraseña</DialogTitle>
          <DialogContent sx={stylePropsFields}>
            <DialogFormFields
              data={fieldsDataPassword}
              control={control}
              errors={errors}
              stylePropsTf={stylePropsTf}
              type='password'
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

export default DialogFormPassword
