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
import {
  styleProps,
  styleSelectInput,
  styleTextArea,
  styleTitlePriceBox,
  styleSelectBox,
  styleTextAreaBox,
  stylePropsButton,
  styleInputFile
} from './styles'
import { articlesCategory } from '../../constants/index'
import SelectInputWrapper from '../SelectInputWrapper'
import InputFileWrapper from '../InputFileWrapper'
import { useArticlesSwr } from '../../hooks/useArticlesSwr'

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
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: INITIAL_VALUES_ARTICLE, resolver: yupResolver(schemaArticle) })

  const onSubmit = (data) => {
    if (data.picture) {
      data.picture = 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
    console.log(data)
    /* Aqui implementaremos la lógica para mandar el nuevo articulo al back,
    usaremos swr en vez de contexto para los articulos. */
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={styleProps}>
      <Box sx={styleTitlePriceBox}>
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='title'
          label='Titulo'
          stylePropsTf={{ height: '10vh' }}
        />
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='price'
          label='Precio'
          stylePropsTf={{ height: '10vh' }}
          InputProps={{
            endAdornment: <InputAdornment position='end'>€</InputAdornment>
          }}
        />
      </Box>
      <Box sx={styleSelectBox}>
        <SelectInputWrapper
          control={control}
          errors={errors}
          name='category'
          label='Categoría'
          items={articlesCategory}
          stylePropsDp={styleSelectInput}
        />
      </Box>
      <Box sx={styleTextAreaBox}>
        <TextFieldWrapper
          control={control}
          errors={errors}
          name='description'
          label='Descripción'
          stylePropsTf={styleTextArea}
          rows={4}
          multiline
        />
      </Box>
      <InputFileWrapper
        control={control}
        errors={errors}
        name='picture'
        text='subir foto'
        styles={styleInputFile}
      />
      <SubmitButton
        styles={stylePropsButton}
        isSubmitting={isSubmitting}
        Icon={SendIcon}
        text='Subir Artículo'
        altText='Subiendo'
      />
    </Box>
  )
}

export default ArticleForm
