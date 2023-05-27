import { navLinks } from "../../constant";
import { NavLink } from 'react-router-dom';
import useHamburgerMenu from "../../hooks/useHamburgerMenu";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { TapCallback, useSwipeable } from "react-swipeable";
import gsap from "gsap";
import { motion } from "framer-motion";

export function Navbar () {
  
  const hamburgerMenu = useHamburgerMenu()
  const sidebarRef = useRef(null)
  
  const [svgRotate, setSvgRotate] = useState(false);


  function showMobileSidebar() {
    hamburgerMenu.onOpen()
    setSvgRotate(true)
  }

  
  function hideSidebar() {
    setSvgRotate(false)
    const sidebar = sidebarRef.current
    gsap.to(sidebar, {duration:0.2,x:-300,
      onComplete: () => hamburgerMenu.onClose(),
    },)
  }


/* for sidebar swiping - start */
const [touched, setTouched] = useState(false);
const [delta, setDelta] = useState<number | null>(0);

const onTouchEndOrOnMouseUp: TapCallback = () => {
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
/* for sidebar swiping - end */


return (
<nav className="px-4 py-4 flex justify-between items-center 4K:px-12 4K:py-8">

  {/* Logo */}
    <svg className='w-24 h-10 MobileL:w-28 MobileL:h-12 Tablet:w-36 Tablet:h-16 LaptopL:w-44 LaptopL:h-22
    4K:w-72 4K:h-28'>
     <use xlinkHref='./sprite.svg#logo'/>
    </svg>


  {/* Navbar Links */}
  <ul className="hidden text-white Tablet:flex Tablet:justify-between Tablet:gap-6 LaptopL:text-lg 4K:text-3xl
  4K:gap-12">
    {navLinks.map(navLink => (
     <NavLink to={navLink.to} key={navLink.id}>{navLink.title}</NavLink>	  
	 ))}
  </ul>


  {/* Hamburger menu */}
  <div>
    <motion.svg 
    className='w-6 h-6 fill-white MobileL:w-8 MobileL:h-8 Tablet:hidden'
    animate={{rotate: svgRotate ? 180 : 0}}
    onClick={() => showMobileSidebar()}>
      <use xlinkHref='./sprite.svg#menu-expand'/>
    </motion.svg>


    {hamburgerMenu.isOpen && 
   
        <div className={`fixed bg-black/[0.6] top-0 right-0 left-0 bottom-0`}  onClick={() => hideSidebar()}
      {...handlers} 
      >
      
      <motion.div className={`fixed top-0 bottom-0 left-0 
      flex px-4 py-2 linear-bg-gray
      !left-[-${delta}px]`} ref={sidebarRef}
      animate={{x:[-150,0]}}
      transition={{duration:0.4}} 
      style={sidebarStyle}>
        <ul className="flex flex-col justify-center gap-2" onClick={e => e.stopPropagation()}>
        {navLinks.map(navLink => (
     <li>
      <NavLink className='linear-border-b-gray' to={navLink.to} key={navLink.id}>{navLink.title}</NavLink>
      </li>
     ))}
        </ul>
      </motion.div>

    </div>}
  </div>

  
</nav>
)
}