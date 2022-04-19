import React from 'react'
import Select from 'react-select'
import { Input, Label, FormGroup, Button, Spinner } from 'reactstrap'

import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import Images from 'constants/images'
import { FastField, Form, Formik } from 'formik'
import InputField from 'custom-fields/InputField/InputField'
import SelectField from 'custom-fields/SelectField/SelectField'
import RandomPhotoField from 'custom-fields/RandomPhotoField/RandomPhotoField'
import * as Yup from 'yup'

function PhotoForm(props) {
  
  const {initialValues, isAddPage} = props

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),

    categoryId: Yup.number().required('This field is required').nullable(),

    photo: Yup.string().required('This field is required')
    // photo: Yup.string().when('categoryId', {
    //   is: 1,
    //   then: Yup.string().required('This field is required'),
    //   otherwise: Yup.string().notRequired()
    // })
  })

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={props.onSubmit}
      >
        {formikProps => {

          const { values, errors, touched, isSubmitting } = formikProps

          console.log({ values, errors, touched })

          return (
            <Form>
              <FastField
                name='title'
                component={InputField}

                label='Title'
                placeholder='Eg: Wow nature...'
              />

              <FastField
                name='categoryId'
                component={SelectField}

                label='Category'
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FastField
                name='photo'
                component={RandomPhotoField}
                label='Photo'
              />


              <FormGroup>
                <Button type='submit' color={isAddPage ? 'primary' : 'success'}>
                  {isSubmitting && <Spinner size='sm'></Spinner>}
                  {isAddPage ? 'Add to album' : 'Edit your photo'}
                </Button>
              </FormGroup>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default PhotoForm