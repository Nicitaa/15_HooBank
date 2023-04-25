import './buttonCircle.css'

export function ButtonCircle ({buttonTitle,buttonCircleClass}) {
return (
<button className={`button-circle-container ${buttonCircleClass}`}>
  <a className='button-circle-title'>{buttonTitle}
  <svg className='w-6 h-6 fill-white absolute top-[10%] left-[55%]'>
    <use xlinkHref="./sprite.svg#arrow-up-right" />
  </svg>
  </a>
</button>
)
}