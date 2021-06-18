import React, { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import './Hero.css';
import restaurants from '../../restaurants';

const Hero = () => {
  const [selected, setSelected] = useState(null);
  const options = []; //Object.keys(restaurants).map(key => restaurants[key].name);

  const onChange = (key) => {
    const index = Object.keys(restaurants).find(option => {
      return restaurants[option].name === key[0]
    });
    const url = `/restaurants/${restaurants[index].id}`;

    if (!!index && window.location.pathname !== url) {
      window.location = url;
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (options.includes(selected)) {
        onChange(selected);
      } else {
        window.location = `/search/${selected}`;
      }
    }
  }

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
              <Typeahead
                emptyLabel=""
                // allowNew
                id="basic-typeahead-single"
                labelKey="name"
                onKeyDown={onKeyDown}
                onChange={onChange}
                onInputChange={setSelected}
                options={options}
              />
            </Form.Group>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;