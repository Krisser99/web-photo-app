import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import Banner from 'components/Banner/Banner'
import Images from 'constants/images'
import PhotoList from 'features/Photo/components/PhotoList/PhotoList'
import { editPhoto, removePhoto } from 'features/Photo/photoSlice'

function MainPage() {
  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log("Photo: ", photos)

  const handlePhotoEditClick = (photo) => {
    console.log('Edit: ', photo)
    editPhoto(photo)
    navigate(`/photos/${photo.id}`)

  }

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id)
    dispatch(action)
  }

  return (
    <div>
      <Banner title='Your awesome photos ✨' backgroundUrl={Images.PINK_BG} />
      <Container className='text-center'>
        <div className='py-5'>
          <Link to='add'>Add new photo</Link>
        </div>
        <PhotoList 
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  )
}

export default MainPage