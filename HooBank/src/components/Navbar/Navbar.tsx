import './navbar.css'
import {navLinks} from './../../constant/data'
import { useEffect, useRef, useState,CSSProperties } from 'react';
import { Link } from 'react-router-dom'; 
import styles from "../../constant/styles";
import { motion, useAnimate } from "framer-motion";
import { gsap } from "gsap";
import { TapCallback,useSwipeable } from 'react-swipeable';
import React from 'react';


export function Navbar() {

  const sidebarRef = useRef(null)

  const [showSidebar,setShowSidebar] = useState(false)
  const [svgRotate, setSvgRotate] = useState(false);



  function showMobileSidebar() {
    setShowSidebar(true)
    setSvgRotate(true)
  }



  
  function hideSidebar() {
    setSvgRotate(false)
    const sidebar = sidebarRef.current
    gsap.to(sidebar, {duration:0.2,x:-300,
      onComplete: () => setShowSidebar(false),
    },)
  }

  



  /* for sidebar swiping */
  const [touched, setTouched] = useState(false);
  const [delta, setDelta] = useState<number | null>(0);

  const onTouchEndOrOnMouseUp: TapCallback = (event) => {
    if (typeof delta === "number" && delta < -110) {
      hideSidebar();
    }
    setTouched(false);
  };

  useEffect(() => {
    if (!touched && typeof delta === "number" && delta < 0) {
      setTimeout(() => {
        setDelta(delta + 1);
      }, 0.2);
    }
    if (typeof delta === "number" && delta > 0) setDelta(null);
  }, [touched, delta]);

  const handlers = useSwipeable({
    onTouchStartOrOnMouseDown: () => {
      setTouched(true);
    },

    onTouchEndOrOnMouseUp,
    onSwiping: (e) => {
      const { deltaX } = e;

      setDelta(deltaX);
    },
    trackMouse: true
  });

  const sidebarStyle: CSSProperties = {};
  if (delta !== null) {
    if (delta <= 0) {
      sidebarStyle.marginLeft = delta;
    }
  } else {
    sidebarStyle.marginLeft = 0;
  }

























  return (
    <nav className="flex justify-between py-6 w-full XS:max-h-[10rem] SM:max-h-[10rem] SM:items-center SM:pb-8
    ">
     
     {/* navbar logo */}
     <svg
      className='w-36 h-14 SM:max-w-[10em] FHD:w-auto FHD:h-auto FHD:max-h-[100%] QHD:max-h-[100%]'>
        <use xlinkHref="./sprite.svg#logo" />
      </svg>


    {/* navbar-desktop-ul */}
    <ul className='list-none flex justify-between items-center gap-8 text-gray-600 text-lg XS:hidden SM:hidden SD:hidden
    FHD:text-[2.5rem]'>
      {navLinks.map((navLink) => <Link className='hover:text-gray-500' {...navLink} key={navLink.id}>{navLink.title}</Link>)}
    </ul>


    {/* navbar_menu-icon_mobile */}
   <div>
     <motion.svg animate={{
        rotate: svgRotate ? 180 : 0
      }}
       className='w-12 h-12 fill-white HD:hidden FHD:hidden QHD:hidden 4K:hidden'
      onClick={() => showMobileSidebar()}>
        <use xlinkHref='./sprite.svg#menu-expand'/>
      </motion.svg>
    </div>

    {/* navbar-sidebar_mobile */}
      {showSidebar && 

      // bg for sidebar
      <div className={`${styles.modalBackground}`}  onClick={() => hideSidebar()}
      {...handlers} 
      >
      
      <motion.div className={`mobile-sidebar XS:w-[60vw] SM:w-[60vw] SD:w-[40vw] !left-[-${delta}px]`} ref={sidebarRef}
      animate={{x:[-150,0]}}
      transition={{duration:0.4}} 
      style={sidebarStyle}>
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
