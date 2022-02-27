import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from './logo';

function NavBar() {
  return (
    <div className='navigation'>
        <Logo />
        
        <span className='bar'>
            <Link to="/home" className='linkItem'>Home</Link>
            <span className='dropdown'>
                <Link to="/" className='linkItem'>Foster Information</Link>
                <div className='dropdown-content'>
                    <Link to="/volunteer" className='dropdownItem'>Become a foster </Link> 
                    <Link to="/signin" className='dropdownItem'>Sign in </Link>
                    <Link to="/fosters" className='dropdownItem'>Find fosters </Link>
                    <Link to="/shelters" className='dropdownItem'>Find shelters </Link>
                </div>
            </span>
            
            <Link to="/donate" className='linkItem'>Donate</Link>
        </span>
        
    </div>
  );
}

export default NavBar;


/*

            <span className='dropdown'>
                <Link to="/" className='linkItem'>Support</Link>
                <div className='dropdown-content'>
                    <Link to="/shelters" className='dropdownItem'>Find shelters </Link> 
                    <Link to="/" className='dropdownItem'>Find counselors </Link>
                    <Link to="/" className='dropdownItem'>Helpful websites </Link>
                    <Link to="/" className='dropdownItem'>National Groups </Link>
                </div>
            </span>
*/