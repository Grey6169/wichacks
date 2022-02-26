import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/home';

import FindShelters from './pages/findShelters';
import FindFosters from './pages/findFosters';


class BPRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                <Route path="/shelters" element={<FindShelters />} />
                <Route path="/fosters" element={<FindFosters />} />
            </Routes>
        );
    }
}

export default BPRoutes;