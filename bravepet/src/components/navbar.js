import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from './logo';

function NavBar() {
  return (
    <div className='navigation'>
        <Logo />
        
        <span className='bar'>
            <Link to="/home" className='linkItem'>Home</Link>
            <Link to="/" className='linkItem'>Foster Information</Link>
            <Link to="/" className='linkItem'>Support</Link>
            <Link to="/" className='linkItem'>Donate</Link>
        </span>
        
    </div>
  );
}

export default NavBar;