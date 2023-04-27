import './buttonCircle.css'
import {motion} from 'framer-motion'

export function ButtonCircle ({buttonTitle,buttonCircleClass}) {
return (
<motion.button whileHover={{scale:1.05}} className={`button-circle-container ${buttonCircleClass}`}>
  <a className='button-circle-title'>{buttonTitle}
  <svg className='w-6 h-6 fill-white absolute top-[10%] left-[55%]'>
    <use xlinkHref="./sprite.svg#arrow-up-right" />
  </svg>
  </a>
</motion.button>
)
}