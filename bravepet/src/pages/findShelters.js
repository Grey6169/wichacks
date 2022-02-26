import './findShelters.css';
import USAMap from "react-usa-map";
import {states} from '../states';
import { useEffect, useRef, useState } from 'react';

function FindShelters() {
    const [data, setData] = useState(null);
    const [stateAbbrev, setStateAbbrev] = useState(null);

    function mapHandler(event) {
        const abbrev = event.target.dataset.name;
        setStateAbbrev(event.target.dataset.name);
        setData(states.states[abbrev]);
    };

  return (
    <div className="App">
        <div className='instr'> Click on a state to view its shelters</div>
        <USAMap onClick={mapHandler} />

        <div className='shelters' id='shelterList'>
            {data && 
                data.map((shelter, index) => (
                    <div key={`${shelter} ${index} ${stateAbbrev}`}>
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

