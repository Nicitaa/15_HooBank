import './navbar.css'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from "../../constant/styles";
import { motion } from "framer-motion";
import { gsap } from "gsap";



export function Navbar() {
  const [showSidebar,setShowSidebar] = useState(false)
  const [svgRotate, setSvgRotate] = useState(false);


  function showMobileSidebar() {
    setShowSidebar(true)
    setSvgRotate(true)
  }
  function hideMobileSidebar() {
    setShowSidebar(false)
  }

  const sidebarRef = useRef(null)
  
  function hideSidebar() {
    setSvgRotate(false)
    const sidebar = sidebarRef.current
    gsap.to(sidebar, {duration:0.2,x:-300,
      onComplete: () => hideMobileSidebar(),
    },)
  }

  /* code below doesn't work */
  const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 50 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
  isLeftSwipe && hideSidebar()
}

  return (
    <nav className="flex justify-between py-6 w-full XS:max-h-[10rem] SM:max-h-[10rem] SM:items-center SM:pb-8
    ">
     
     <svg
      className='w-36 h-14 SM:max-w-[10em]'>
        <use xlinkHref="./sprite.svg#logo" />
      </svg>

    <ul className='list-none flex justify-between items-center gap-8 text-gray-600 text-lg XS:hidden SM:hidden SD:hidden'>
      <Link className='hover:text-gray-500' to='/'>Home</Link>
      <Link className='hover:text-gray-500' to='/features'>Features</Link>
      <Link className='hover:text-gray-500' to='/product'>Product</Link>
      <Link className='hover:text-gray-500' to='/clients'>Clients</Link>
    </ul>

   <div>
     <motion.svg animate={{
        rotate: svgRotate ? 180 : 0
      }}
       className='w-12 h-12 fill-white HD:hidden FHD:hidden QHD:hidden 4K:hidden'
      onClick={() => showMobileSidebar()}>
        <use xlinkHref='./sprite.svg#menu-expand'/>
      </motion.svg>
    </div>

      {showSidebar && 
      <div className={`${styles.modalBackground}`} onClick={() => hideSidebar()}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <motion.div className='mobile-sidebar XS:w-[60vw] SM:w-[60vw] SD:w-[40vw]' ref={sidebarRef}
      animate={{x:[-150,0]}}
      transition={{duration:0.4}}>
        <ul onClick={e => e.stopPropagation()}>
          <li><Link className='hover:text-gray-500' to='/'>Home</Link></li>
          <li><Link className='hover:text-gray-500' to='/features'>Features</Link></li>
          <li><Link className='hover:text-gray-500' to='/product'>Product</Link></li>
          <li><Link className='hover:text-gray-500' to='/clients'>Clients</Link></li>
        </ul>
      </motion.div>
      </div>
      }
    </nav>
  );
}
