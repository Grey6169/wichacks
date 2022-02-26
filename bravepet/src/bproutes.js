import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/home';


class BPRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                
            </Routes>
        );
    }
}

export default BPRoutes;