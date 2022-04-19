import { ErrorMessage } from 'formik'
import React from 'react'
import Select from 'react-select'
import { FormFeedback, FormGroup, Label } from 'reactstrap'

function SelectField(props) {

  const {field, form, options, type, label, placeholder, disabled} = props
  const { name, value } = field
  const {errors, touched} = form 
  const showError = errors[name] && touched[name]
  
  const selectedOption = options.find(option => option.value === value)

  const handleSelectOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption
    
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent)
  }

  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        
        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectOptionChange}

          type={type}
          disabled={disabled}
          options={options}
          placeholder={placeholder}
          className={showError ? 'is-invalid' : ''}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  )
}

export default SelectField