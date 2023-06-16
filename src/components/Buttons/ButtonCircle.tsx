import { motion } from "framer-motion"

interface ButtonCircleProps {
  label:string
  className?:string
}

export function ButtonCircle ({label,className}:ButtonCircleProps) {
return (
  <motion.button className={`text-white
  w-8 h-8 p-12
  hidden Tablet:flex
  rounded-full justify-center items-center 
  border-[3px] border-solid border-transparent button-circle-bg
  ${className}`}
  whileHover={{scale:1.05}} whileTap={{ scale: 0.95 }}>
  <a className='relative font-bold text-start'>{label}
  <svg className='w-6 h-6 fill-white absolute top-[0%] right-[0%]
  Laptop:w-8 Laptop:h-8
  LaptopL:w-10 LaptopL:h-10
  4K:w-20 4K:h-20 4K:top-[-10%] 4K:right-[5%]
  '>
    <use xlinkHref="./sprite.svg#arrow-up-right" />
  </svg>
  </a>
</motion.button>
)
}