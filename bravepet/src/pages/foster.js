import './findFosters.css';
import envelope from '../media/envelope.png';
import { Link } from 'react-router-dom';

function Foster(props) {
  const foster = props.foster;
  return (
    <div className='fosterProfile'>
        <img src={props.foster.imgSrc} alt="profile picture"></img>
        <div className='fosterName'>{props.foster.name}</div>
        <div className='fosterBio'>{props.foster.bio}</div>
        <img className='msg' src={envelope}></img>

        <div className='accepted'>
            This foster accepts: <br/>
            {props.foster.accepted.map((a) => (
                <>
                    <input type="checkbox" checked="true" onclick="return false;"/>
                    {a}
                </>
            ))}
        </div>
        
        
    </div>
  );
}

export default Foster;

