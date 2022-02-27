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
    <div className="findShelters">
        <div className='instr'> Click on a state to view its pet-friendly shelters</div>
        <div className='map'> <USAMap onClick={mapHandler} /></div>

        <div className='shelters' id='shelterList'>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Phone Number </th>
                        <th> Town/Area </th>
                        <th> Website </th>
                    </tr>
                </thead>
                <tbody>
                    {data && 
                        data.map((shelter, index) => (
                            <tr key={`${shelter} ${index} ${stateAbbrev}`}>
                                <td>{shelter.name} </td> 
                                <td>{shelter.phone}</td> 
                                <td>{shelter.town}</td> 
                                <td><a href={shelter.website}> {shelter.name} </a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default FindShelters;

