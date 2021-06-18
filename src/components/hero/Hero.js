import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row>
          <div className="hero-text">
            Aqui poderás encontrar o que sempre procuraste, os restaurantes mais sustentáveis em Lisboa!
          </div>
        </Row>
        <Row>
          <div className="hero-search">
            <Form.Group>
              <Form.Control size="md" type="text" placeholder="&#x1F50E;" />
            </Form.Group>
          </div>
        </Row>
      </Container>
      <img src="/background.png" alt="hero background" />
    </div>
  );
};

export default Hero;