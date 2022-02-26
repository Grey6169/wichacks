import './navbar.css';
import LogoImg from '../media/logo.png';


function Logo() {
  return (
    <>
        <img src={LogoImg} alt="The logo"></img>
        <span className='name'>
            <span className='boldPurple'> Brave</span>Pet
        </span>
        
    </>
  );
}

export default Logo;