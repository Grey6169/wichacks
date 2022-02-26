import './findShelters.css';
import USAMap from "react-usa-map";
import {states} from '../states';
import { useRef, useState } from 'react';

function FindShelters() {
    const [data, setData] = useState(null);

    function mapHandler(event) {
        setData(null);
        const stateAbbrev = event.target.dataset.name;
        setData(states.states[stateAbbrev]);
    };

  return (
    <div className="App">
        <div className='instr'> Click on a state to view its shelters</div>
        <USAMap onClick={mapHandler} />

        <div className='shelters' id='shelterList'>
            {data && 
                data.map((shelter) => (
                    <div key={shelter.name}>
                        {shelter.name} <br/>
                        {shelter.phone} <br/>
                        {shelter.town} <br/>
                        <a href={shelter.website}> {shelter.name}'s Website </a> <br/> <br/>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default FindShelters;

