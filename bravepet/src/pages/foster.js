import './findFosters.css';

function Foster(props) {
  return (
    <div className='fosterProfile'>
        <img src={props.foster.imgSrc} alt="profile picture"></img>
        <div className='fosterName'>{props.foster.name}</div>
        <div className='fosterBio'>{props.foster.bio}</div>

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

