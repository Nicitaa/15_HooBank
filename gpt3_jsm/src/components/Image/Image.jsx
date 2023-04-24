import './image.css'

export function Image ({imgUrl,classNameParam}) {
return (
 
  <img class={`image ${classNameParam}`} src={imgUrl}/>

)
}