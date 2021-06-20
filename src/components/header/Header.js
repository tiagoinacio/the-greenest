import React from 'react';
import { Container, Col, Row, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';

const Header = ({ theme = 'dark' }) => {
  return (
    <div className={`header ${theme}`}>
      <Container>
        <Row className="header-content">
          <Col xs lg="3">
            <Nav className="mr-auto logo-link">
              <Nav.Link href="/the-greenest/#root">
                <Logo width="233"
                  height="62" className="d-inline-block align-top" />
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs lg="9" className="header-links">
            <Navbar>
              <Nav className="mr-auto">
                <Nav.Link href="/the-greenest/#sobre-nos">Sobre Nós</Nav.Link>
                <Nav.Link href="/the-greenest/#certificados">Certificados</Nav.Link>
                <Nav.Link href="/the-greenest/#quero-ser-green">Quero Ser Green</Nav.Link>
                <Nav.Link href="/the-greenest/#app">App</Nav.Link>
                <Nav.Link href="/the-greenest/#contactos">Contactos</Nav.Link>
                <Nav.Link href="/the-greenest/login">Login</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;