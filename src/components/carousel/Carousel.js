import React from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery = () => (
  <Carousel nextLabel="" prevLabel="">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/the-greenest/carousel01.png"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/the-greenest/carousel01.png"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/the-greenest/carousel01.png"
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
);

export default Gallery;