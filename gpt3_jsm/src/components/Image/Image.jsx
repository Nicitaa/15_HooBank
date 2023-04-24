import './image.css'

export function Image ({imgUrl,imageClass}) {
return (
 
  <img className={`image-container ${imageClass}`} src={imgUrl}/>

)
}