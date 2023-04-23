import './navbar.css'
import { Link } from 'react-router-dom'; 

export function Navbar() {
  return (
    <nav className="nav">
     
     <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref="./Navbar/sprite.svg#navbar-logo" />
      </svg>

    <span>
      <Link to='/'>Home</Link>
      <Link to='/'>Features</Link>
      <Link to='/'>Product</Link>
      <Link to='/'>Clients</Link>
    </span>
    </nav>
  );
}
