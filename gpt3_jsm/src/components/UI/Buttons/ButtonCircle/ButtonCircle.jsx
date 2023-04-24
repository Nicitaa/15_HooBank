import './buttonCircle.css'

export function ButtonCircle ({buttonText,classNameParam}) {
return (
<button className={`button-circle ${classNameParam}`}>
  <a className='relative'>{buttonText}
  <svg className='w-6 h-6 fill-white absolute top-[10%] left-[55%]'>
    <use xlinkHref="./sprite.svg#arrow-up-right" />
  </svg>
  </a>
</button>
)
}