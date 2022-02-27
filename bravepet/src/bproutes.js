import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/home';

import FindShelters from './pages/findShelters';
import FindFosters from './pages/findFosters';

import SignIn from './pages/signin';
import Volunteer from './pages/volunteer';
import Donate from './pages/donate';
import Message from './pages/message';

class BPRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                <Route path="/shelters" element={<FindShelters />} />
                <Route path="/fosters" element={<FindFosters />} />

                <Route path="/signin" element={<SignIn />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/message" element={<Message />} />
            </Routes>
        );
    }
}

export default BPRoutes;