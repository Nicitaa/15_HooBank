import { Link } from 'react-router-dom'; 

export function Navbar() {
  return (
    <nav className="flex justify-between py-4">
     
     <svg className='w-36 h-14'>
        <use xlinkHref="./sprite.svg#navbar-logo" />
      </svg>

    <ul className='list-none flex justify-between items-center gap-8 text-gray-600 text-lg'>
      <Link className='hover:text-gray-500' to='/'>Home</Link>
      <Link className='hover:text-gray-500' to='/features'>Features</Link>
      <Link className='hover:text-gray-500' to='/product'>Product</Link>
      <Link className='hover:text-gray-500' to='/Clients'>Clients</Link>
    </ul>
    </nav>
  );
}
