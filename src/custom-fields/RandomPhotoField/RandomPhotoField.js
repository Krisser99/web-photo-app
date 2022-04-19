import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap'

import RandomPhoto from 'components/RandomPhoto/RandomPhoto'
import { ErrorMessage } from 'formik'

function RandomPhotoField(props) {

  const { field, form, label, className } = props
  const { name, value, onBlur } = field
  const {errors, touched} = form 
  const showError = errors[name] && touched[name]

  console.log(className)
  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl)
  }

  return (
    <>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <RandomPhoto
          name={name}
          imageUrl={value}
          onImageUrlChange={handleImageUrlChange}
          onRandomButtonBlur={onBlur}
          className={showError ? 'is-invalid' : ''}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </>
  )
}

export default RandomPhotoField