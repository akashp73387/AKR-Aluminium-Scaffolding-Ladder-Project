import React from 'react';
import Carousel from '../Components/Carousel.jsx';
import Highlights from '../Components/Highlights.jsx';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Products from '../Components/Products.jsx';

const Homepage = () => {
    return (
        <div >
            <Navbar/>
            <Carousel/>
            <Highlights/>
            <Products/>
            {/* <Footer/> */}
           
        </div>
    );
};

export default Homepage;