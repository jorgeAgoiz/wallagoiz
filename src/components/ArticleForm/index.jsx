import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box } from '@mui/system'
import SendIcon from '@mui/icons-material/Send'
import TextFieldWrapper from '../TextfieldWrapper'
import SubmitButton from '../SubmitButton'
import { InputAdornment } from '@mui/material'
import TextAreaWrapper from '../TextAreaWrapper'
import { styleProps, styleSelectInput, styleTextArea, styleTitlePriceBox } from './styles'
import { articlesCategory } from '../../constants/index'
import SelectInputWrapper from '../SelectInputWrapper'

const INITIAL_VALUES_ARTICLE = {
  title: '',
  description: '',
  price: 0,
  category: '',
  picture: ''
}
const schemaArticle = yup.object({
  title: yup.string().required('Requerido'),
  description: yup.string().required('Requerido'),
  price: yup.number().min(1, 'Inserte un precio válido.').required('Requerido'),
  category: yup.string().required('Requerido'),
  picture: yup.string().required('Requerido')
})

const ArticleForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: INITIAL_VALUES_ARTICLE, resolver: yupResolver(schemaArticle) })

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={styleProps}>
      <Box sx={styleTitlePriceBox}>
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='title'
          label='Titulo'
        />
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='price'
          label='Precio'
          InputProps={{
            endAdornment: <InputAdornment position='end'>€</InputAdornment>
          }}
        />
      </Box>
      <SelectInputWrapper
        control={control}
        errors={errors}
        name='category'
        label='Categoría'
        items={articlesCategory}
        stylePropsDp={styleSelectInput}
      />
      <TextAreaWrapper
        control={control}
        errors={errors}
        name='description'
        label='Descripción'
        stylePropsTf={styleTextArea}
      />

      {/* Esto tiene que ser con el componente InputFileWrapper */}
      <TextFieldWrapper
        control={control}
        errors={errors}
        name='picture'
        label='Fotografía'
      />
      <SubmitButton
          /* styles={stylePropsButton} */
        isSubmitting={isSubmitting}
        Icon={SendIcon}
        text='Subir Artículo'
        altText='Subiendo'
      />
    </Box>
  )
}

export default ArticleForm

/* Seguimos estilando los campos */
