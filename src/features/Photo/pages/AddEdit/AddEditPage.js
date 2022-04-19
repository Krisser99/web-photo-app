import React from 'react'

import PhotoForm from 'features/Photo/components/PhotoForm/PhotoForm'
import Banner from 'components/Banner/Banner'
import './AddEditPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { addPhoto, editPhoto } from 'features/Photo/photoSlice'
import { randomNumber } from 'common'

function AddEditPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const isAddPage = !id
  const editedPhoto = useSelector(state => state.photos.find(x => x.id === +id))
  console.log(id)

  const initialValues = isAddPage ? {
    title: '',
    categoryId: null,
    photo: ''
  } : editedPhoto

  const handleSubmit = (values) => {
    const newValues = {
      ...values,
      id: randomNumber(10000, 99999)
    }

    return new Promise(resolve => {
      setTimeout(() => {
        if (isAddPage) {
          const action = addPhoto(newValues)
          dispatch(action)
        } else {
          const action = editPhoto(values) 
          dispatch(action)
        }
        navigate('/photos')
        resolve(true)
      }, 2000)
    })

  }

  return (
    <div className='photo-edit'>
      <Banner title='Pick your amazing photo 😎' />

      <div className="photo-edit__form">
        <PhotoForm
          isAddPage={isAddPage}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default AddEditPage