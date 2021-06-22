import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const Gallery = () => (
  <Carousel controls indicators nextLabel="" prevLabel="" wrap>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/the-greenest/carousel01.png"
        alt="First slide"
      />
      <Carousel.Caption>
      Quinta do Arneiro
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/the-greenest/carousel02.png"
        alt="Second slide"
      />
      <Carousel.Caption>
        PESCA
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Gallery;