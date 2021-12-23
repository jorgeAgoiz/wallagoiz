import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'
import TextFieldWrapper from '../TextfieldWrapper'
import SubmitButton from '../SubmitButton'

const DialogForm = ({
  open, // Estado de componente para mostrar o ocultar
  handleClose, // Función para ocultar
  title, // Titulo en el DialogTitle
  textBtn, // Texto para el boton de envio
  fields, // Array de objetos con los datos de los campos
  stylesForm, // Estilos del formulario
  stylesFieldsDiv, // Estilos del Div donde estan los TextFields
  stylePropsTf, // Estilos para los TextFields
  control, // useForm
  handleSubmit, // useForm
  errors, // useForm
  isSubmitting, // useForm
  onSubmit // Función para el envio del formulario
}) => {
  const fieldsToRender = () => {
    return fields.map((field) => {
      return (
        <TextFieldWrapper
            key={field.id}
            control={control}
            errors={errors}
            name={field.name}
            label={field.label}
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
