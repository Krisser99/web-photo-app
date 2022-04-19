import React from 'react'

import { Button } from 'reactstrap'
import './RandomPhoto.scss'

const getRandomImageUrl = () => {

  let randomId = Math.floor(Math.random() * 1000)

  return `https://picsum.photos/id/${randomId}/300/300.jpg`
}

function RandomPhoto(props) {

  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, className } = props

  const handleOnClickRandom = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl()
      onImageUrlChange(randomImageUrl)
    }
  }



  return (
    <div className={`random-photo ${className}`}>
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color='primary'
          onBlur={onRandomButtonBlur}
          onClick={handleOnClickRandom}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && <img
          onError={handleOnClickRandom}
          src={imageUrl}
          alt='Ooops....Have an error. Can you click random button again !!!'
        />}
      </div>
    </div>
  )
}

export default RandomPhoto