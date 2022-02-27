import './findFosters.css';
import { useRef, useState } from 'react';
import {fosters} from '../fosters';
import Foster from './foster';

function FindFosters() {
    const [fosterList, setFosterList] = useState(null);
    const [zip, setZip] = useState(null);

    function search(event) {
        event.preventDefault();
        setZip(event.target[0].value);

        const newFoster = fosters[event.target[0].value]
        setFosterList(newFoster);
        event.target[0].value = "";
        console.log(newFoster);
    };

  return (
    <div className="fosterSearch">
        <h1>Find Fosters Near You</h1> 
        <form className='search' onSubmit={search}>
            <label htmlFor='zip'>Enter your Zip</label>
            <input id="zip" name="zip" type="text" 
            inputMode="numeric" placeholder='Zipcode'></input> <br/>
            <input type="submit" value="Search" ></input>
        </form>

        <div> 
            {fosterList && 
                fosterList.map((f) => (
                    <div key={f.name}>
                        <Foster 
                            foster={f}
                        />
                    </div>
                ))
            } 
        </div>
        
    </div>
  );
}

export default FindFosters;


