import { navLinks } from "../../constant";
import { NavLink, useNavigate } from 'react-router-dom';
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


const navigate = useNavigate()


return (
<nav className="px-4 py-4 flex justify-between items-center 
Tablet:px-8
Laptop:px-12
LaptopL:px-16
4K:px-32      4K:py-12">

  {/* Navbar Logo */}
    <svg className='w-32 h-14
    MobileM:w-40  MobileM:h-16
    MobileL:w-42  MobileL:h-18
    Tablet:w-36   Tablet:h-16
    Laptop:w-48   Laptop:h-24
    LaptopL:w-56  LaptopL:h-22
    4K:w-96       4K:h-32'
    onClick={() => navigate("/")}>
     <use xlinkHref='./sprite.svg#logo'/>
    </svg>


  {/* Navbar Links */}
  <ul className="hidden text-white justify-between gap-6
  Tablet:flex
  Laptop:text-2xl
  LaptopL:text-3xl LaptopL:gap-8
  4K:text-5xl 4K:gap-16">
    {navLinks.map(navLink => (
     <NavLink to={navLink.to} key={navLink.id}>{navLink.title}</NavLink>	  
	 ))}
  </ul>


  {/* Hamburger menu */}
  <div>
    <motion.svg 
    className='w-6 h-6 fill-white 
    MobileS:w-8 MobileS:h-8 
    MobileM:w-9 MobileM:h-9 
    MobileL:w-10 MobileL:h-10 
    Tablet:hidden'
    animate={{rotate: svgRotate ? 180 : 0}}
    onClick={() => showMobileSidebar()}>
      <use xlinkHref='./sprite.svg#menu-expand'/>
    </motion.svg>


    {hamburgerMenu.isOpen && 
   
        <div className={`fixed bg-black/[0.6] top-0 right-0 left-0 bottom-0 z-[99]`}  onClick={() => hideSidebar()}
      {...handlers} 
      >
      
      <motion.div className={`fixed top-0 bottom-0 left-0 
      flex px-6 py-2 linear-bg-gray
      MobileM:px-10
      MobileL:px-12
      !left-[-${delta}px]`} ref={sidebarRef}
      animate={{x:[-150,0]}}
      transition={{duration:0.4}} 
      style={sidebarStyle}>
        <ul className="flex flex-col pt-12 gap-6" onClick={e => e.stopPropagation()}>
        {navLinks.map(navLink => (
     <li key={navLink.id}>
      <NavLink className='linear-border-b-gray text-2xl
      MobileM:text-3xl
      MobileL:text-4xl'
       to={navLink.to} key={navLink.id}>{navLink.title}</NavLink>
      </li>
     ))}
        </ul>
      </motion.div>

    </div>}
  </div>

  
</nav>
)
}