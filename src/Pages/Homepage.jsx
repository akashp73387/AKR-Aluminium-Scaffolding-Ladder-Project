import React from 'react';
import Carousel from '../Components/Carousel.jsx';
import Highlights from '../Components/Highlights.jsx';
import Footer from '../Components/Footer.jsx';

const Homepage = () => {
    return (
        <div>
            <Carousel/>
            <Highlights/>
            <Footer/>
        </div>
    );
};

export default Homepage;