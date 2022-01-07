import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Box } from '@mui/system'
import SendIcon from '@mui/icons-material/Send'
import { InputAdornment } from '@mui/material'
import TextFieldWrapper from '../TextfieldWrapper'
import SubmitButton from '../SubmitButton'
import SelectInputWrapper from '../SelectInputWrapper'
import InputFileWrapper from '../InputFileWrapper'
import { useArticlesSwr } from '../../hooks/useArticlesSwr'
import { createArticle } from '../../services/createArticle'
import { articlesCategory } from '../../constants/index'
import { UserContext } from '../../context/UserContext'
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
  const { userLog } = useContext(UserContext)
  const navigate = useNavigate()
  const { articles, setArticles } = useArticlesSwr()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: INITIAL_VALUES_ARTICLE, resolver: yupResolver(schemaArticle) })

  const onSubmit = async (data) => {
    try {
      if (data.picture) {
        data.picture = 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      }
      data.userId = userLog.id
      // Actualización de la caché
      setArticles('http://localhost:3012/articles', [...articles, data], false)
      // Actualización en la BBDD
      const result = await createArticle(data)
      if (result) {
        // Si la BBDD se actualiza correctamente, realizamos una nueva llamada.
        await setArticles('http://localhost:3012/articles')
        return navigate('/')
      }
    } catch (err) {
      console.log(err)
      return navigate('/error')
    }
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
