import React from 'react'
import { Button } from 'reactstrap'
import './PhotoCard.scss'
function PhotoCard(props) {

  const {photo, onEditClick, onRemoveClick} = props

  const handleEditClick = () => onEditClick(photo)
  const handleRemoveClick = () => onRemoveClick(photo)

  return (
    <div className='photo'>
      <img src={photo.photo} alt={photo.title}/>
      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>
        <div className="photo__actions">
        <div>
            <Button outline size='sm' color='light' onClick={handleEditClick}>Edit</Button>
          </div>
          <div>
            <Button outline size='sm' color='danger' onClick={handleRemoveClick}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard