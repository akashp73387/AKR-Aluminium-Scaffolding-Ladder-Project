import React from 'react';

import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Main from './Main.jsx';


const Homepage = () => {
    return (
        <div >
            <Navbar/>
            <Main/>
           
             <Footer/> 
           
        </div>
    );
};

export default Homepage;