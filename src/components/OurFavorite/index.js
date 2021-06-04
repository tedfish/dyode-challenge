import React from 'react'
import {
  ImageFavorite
} from './styles'
import ImageFavoriteSrc from './Hero Image 2 1.png'
const OurFavorite = () => {
  return (
    <>
    <ImageFavorite>
      <img src={ImageFavoriteSrc} alt="Our Favorite Tees" width="100%"/>
    </ImageFavorite>
    </>
  )
}
export default OurFavorite