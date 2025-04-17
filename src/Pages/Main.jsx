import React from 'react';
import Carousel from "../Components/Carousel.jsx";
import Highlights from "../Components/Highlights.jsx";
import Products from "../Components/Products.jsx";

const Main = () => {
    return (
      <div>
        <Carousel />
        <Highlights />
        <Products />
      </div>
    );
};

export default Main;