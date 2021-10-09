import React from 'react';
import { Navbar, Homepage } from './components';

import './App.css';



const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Homepage />
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App;
