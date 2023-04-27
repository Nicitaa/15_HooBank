import './image.css'
import React from 'react'

interface ImageProps {
  imgUrl:string
  imageClass?:string
}

export function Image ({imgUrl,imageClass}:ImageProps) {
return (
 
  <img className={`image-container ${imageClass}`} src={imgUrl}/>

)
}