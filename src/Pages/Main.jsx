import React from 'react';
import Carousel from "../Components/Carousel.jsx";
import Highlights from "../Components/Highlights.jsx";
import Products from "../Components/Products.jsx";
import ProductUse from '../Components/ProductUse.jsx';
import Certification from '../Components/Certification.jsx';

const Main = () => {
    return (
      <div>
        <Carousel />
        <Highlights />
        <Products />
        <ProductUse/>
        <Certification/>
      </div>
    );
};

export default Main;