import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css';

import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';

const CarouselContainer = () => {
  return (
    
    
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={10000}>
        <img
          className="col-12 col-xl-8"
          src={image3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>#SomosUAEMéx</h3>
          <p> Patria, Ciencia y Trabajo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="col-12 col-xl-8"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>#SomosUAEMéx</h3>
          <p> Patria, Ciencia y Trabajo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="col-12 col-xl-8"
          src={image1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>#SomosUAEMéx</h3>
          <p> Patria, Ciencia y Trabajo.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  )
}

export default CarouselContainer;