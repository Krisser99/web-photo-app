import React from 'react'
import {Row, Col} from 'reactstrap'
import PhotoCard from '../PhotoCard/PhotoCard'

function PhotoList(props) {
  const {photoList, onPhotoEditClick, onPhotoRemoveClick} = props

  return (
    <div>
      <Row>
        {photoList.map(photo => (
          <Col key={photo.title} sm='12' md='6' lg='3'>
            <PhotoCard 
              photo={photo}
              onEditClick={onPhotoEditClick}
              onRemoveClick={onPhotoRemoveClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PhotoList