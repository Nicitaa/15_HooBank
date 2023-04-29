import './navbar.css'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from "../../constant/styles";
import { motion } from "framer-motion";
import { gsap } from "gsap";



export function Navbar() {
  const [showMenu,setShowMenu] = useState(false)

  const sidebarRef = useRef(null)
  
  function hideSidebar() {
    const sidebar = sidebarRef.current
    gsap.to(sidebar, {duration:0.2,x:-300,
      onComplete: () => setShowMenu(false)
    },);
  }

  useEffect(() => {
    const sidebar = sidebarRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    if (sidebar) {
      sidebar.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - sidebar.offsetLeft;
        scrollLeft = sidebar.scrollLeft;
      });

      window.addEventListener("mouseup", () => {
        isDown = false;
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sidebar.offsetLeft;
        const speed = 1;
        const walk = (x - startX) * speed;
        sidebar.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);



  return (
    <nav className="flex justify-between py-4 SD:h-[10rem] SD:min-w-[25rem] SD:items-center SD:pb-12">
     
     <svg className='w-36 h-14 SD:h-[10rem] SD:min-w-[10rem]'>
        <use xlinkHref="./sprite.svg#logo" />
      </svg>

    <ul className='list-none flex justify-between items-center gap-8 text-gray-600 text-lg SD:hidden'>
      <Link className='hover:text-gray-500' to='/'>Home</Link>
      <Link className='hover:text-gray-500' to='/features'>Features</Link>
      <Link className='hover:text-gray-500' to='/product'>Product</Link>
      <Link className='hover:text-gray-500' to='/clients'>Clients</Link>
    </ul>

    <div>
      <svg className='w-12 h-12 fill-white HD:hidden FHD:hidden QHD:hidden 4K:hidden'
      onClick={() => setShowMenu(true)}>
        <use xlinkHref='./sprite.svg#menu-expand'/>
      </svg>
      {showMenu && 
      <div className={`${styles.modalBackground}`} onClick={() => hideSidebar()}>
      <motion.div className='mobile-sidebar' ref={sidebarRef}
      animate={{x:[-150,0]}}
      transition={{duration:0.4}}>
        <ul>
          <li><Link className='hover:text-gray-500' to='/'>Home</Link></li>
          <li><Link className='hover:text-gray-500' to='/features'>Features</Link></li>
          <li><Link className='hover:text-gray-500' to='/product'>Product</Link></li>
          <li><Link className='hover:text-gray-500' to='/clients'>Clients</Link></li>
        </ul>
      </motion.div>
      </div>
      }
    </div>
    </nav>
  );
}
