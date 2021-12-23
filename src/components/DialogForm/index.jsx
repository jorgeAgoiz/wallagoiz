import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'
import { useForm } from 'react-hook-form'
import TextFieldWrapper from '../TextfieldWrapper'
import SubmitButton from '../SubmitButton'

const DialogForm = ({
  open,
  handleClose,
  title,
  textBtn,
  fields,
  defaultValues,
  stylesForm,
  stylesFieldsDiv
}) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: defaultValues/* , resolver: yupResolver(schemaSignUp) */ })

  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log('Hi There!!')
    /* Aqui la lógica del formulario */
  }

  const fieldsToRender = () => {
    return fields.map((field) => {
      return (
        <TextFieldWrapper
            key={field.id}
            control={control}
            errors={errors}
            name={field.name}
            label={field.label}
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
            <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={stylesForm}>
                <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
                <DialogContent sx={stylesFieldsDiv}>
                      {
                          fieldsToRender()
                      }
                </DialogContent>
                <DialogActions>
                    <SubmitButton isSubmitting={isSubmitting} text={textBtn} Icon={SaveIcon} />
                    <Button onClick={handleClose} variant='contained' color='error'>Cancelar</Button>
                </DialogActions>
            </Box>
        </Dialog>
    </>
  )
}

export default DialogForm

/* - Darle funcionalidad al onSubmit
   - Insertar los required
   - Manejar los errores
   */
