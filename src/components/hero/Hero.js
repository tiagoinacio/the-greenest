import React, { useState, useEffect } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
// import { useHistory } from "react-router-dom";
import './Hero.css';

// const history = useHistory();

const Hero = () => {
  const [singleSelections, setSingleSelections] = useState('');
  const options = ['Marquês', 'Teste'];

  const onChange = (singleSelections) => {
    const url = `/restaurants/${singleSelections}`;
    console.log(url, singleSelections, window.location.pathname);
    if (!!singleSelections && window.location.pathname !== url) {
      window.location = url;
    }
  };
  
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
              <Form.Label>Single Selection</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={onChange}
                options={options}
                placeholder="Choose a state..."
                selected={singleSelections}
              />
            </Form.Group>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;