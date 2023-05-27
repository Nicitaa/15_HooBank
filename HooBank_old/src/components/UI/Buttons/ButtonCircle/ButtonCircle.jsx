import './buttonCircle.css'
import {motion} from 'framer-motion'

export function ButtonCircle ({buttonTitle,buttonCircleClass}) {
return (
<motion.button whileHover={{scale:1.05}} whileTap={{ scale: 0.95 }} className={`button-circle-container ${buttonCircleClass}
FHD:w-48 FHD:h-48`}>
  <a className='button-circle-title'>{buttonTitle}
  <svg className='w-6 h-6 fill-white absolute top-[10%] left-[55%] FHD:w-12 FHD:h-12 FHD:top-[5%]'>
    <use xlinkHref="./sprite.svg#arrow-up-right" />
  </svg>
  </a>
</motion.button>
)
}