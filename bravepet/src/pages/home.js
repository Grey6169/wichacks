import './home.css';
import graph1 from '../media/25perc.png';
import graph2 from '../media/50perc.png';
import graph3 from '../media/71perc.png';
import { useState } from 'react';

function Home() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <h1>
        Welcome to BravePet!
      </h1>

      {visible && <>
        <div className="banner">
          <button className='close' onClick={() => setVisible(!visible)}>Close</button>
          <span className="redbold"> WARNING: </span> Internet usage can always be monitored, 
          if you feel 
          unsafe, please exit this immediately. We do our best to keep things 
          subtle, but anything can be traced. Please reach out to 911 if at 
          any point you are in danger. <br/>
          You will see a bright red escape at the top right of every page, you can click
          that or your escape key on your keyboard for an immediate exit to Chewy.com. 
        </div> 
      </>
      
      }
      <div className='information'>
        <div className='text'>
          BravePet exists for a few reasons, to help protect and support 
          our vulnerable community, raise awareness,
          and allow people to get out of abusive situations.
        </div>
      </div>

      <div className='row'>
        <div className='column'>
          <img src={graph1}></img> <br/>
          <span className='caption'>
            About 25% of abuse victims will return to their
            abusers because of their pets.
          </span>
        </div>
        <div className='column'>
          <img src={graph2}></img> <br/>
          <span className='caption'>
            Almost half of victims stay in these abusive situations, 
            rather than leave their pets behind.
          </span>
        </div>
        <div className='column'>
          <img src={graph3}></img><br/>
          <span className='caption'>
            71% of victims say that their abuser also physically harmed
            or killed their pet as means of control.
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;

