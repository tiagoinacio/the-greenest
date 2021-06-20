import React from 'react';
import { Button, Container, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import './Footer.css';
import { ReactComponent as Instagram } from '../../assets/svgs/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/svgs/facebook.svg';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-content">
          <Col xs lg="4">
            Newsletter
          </Col>
          <Col xs lg="6">

          </Col>
          <Col xs lg="2" className="redes-sociais">
            Redes Sociais
          </Col>
        </Row>

        <Row className="newsletter">
          <Col xs lg="4">
            <InputGroup className="mb-2">
              <FormControl id="inlineFormInputGroup" placeholder="Email" />
              <InputGroup.Append>

                <Button type="submit" className="button-footer mb-2">
                  Submeter
                </Button>

              </InputGroup.Append>
            </InputGroup>
          </Col>

          <Col xs lg="6"> </Col>

          <Col xs lg="2" className="redes-sociais-icons">
            <Facebook width="165px" />
            <Instagram height="30px" />
          </Col>
        </Row>

        <Row>
          <Col xs lg="3" className="copyright">
          © All rights reserved
          </Col>

          <Col xs lg="6"> </Col>
          
          <Col xs lg="3" className="terms-and-conditions">
          Termos e Condições
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;