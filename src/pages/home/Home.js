import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Carousel from '../../components/carousel/Carousel';
import './Home.css';

const Home = () => (
  <div className="home">
    <Header />
    <Hero />
    <Container>
      <Row className="home-title">
        <Col xs lg="5">
          <h1>OS RESTAURANTES MAIS GREENEST</h1>
        </Col>
      </Row>
      <Row>
        <Col xs lg="12">
          <Carousel />
        </Col>
      </Row>

      <Row className="home-title">
        <Col xs lg="4">
          <h1>NO QUE ACREDITAMOS</h1>
        </Col>
      </Row>

      <Row>
        <Col xs lg="12">
          <Row className="mission-vision">
            <Col xs lg="6">
              <h5>Valores</h5>
            </Col>
            <Col xs lg="6">
              <h5>Missão</h5>
            </Col>
          </Row>

          <Row>
            <Col xs lg="6">
              Sustentabilidade - Comer hoje sem comprometer o amanhã<br />
              Comunidade - Envolver e dar voz à nossa tribo<br />
              Sensibilização - Tornar consciente as nossas escolhas na alimentação.
            </Col>
            <Col xs lg="6">
              Através de uma plataforma fácil e intuitiva conectamos pessoas e estabelecimentos do ramo alimentar com práticas orientadas para sustentáveis.
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="certificados">
        <Col xs lg="6">
          <h1>QUE CERTIFICADOS PODES ENCONTRAR</h1>
        </Col>
      </Row>

      <Row>
        <Col xs lg="12">
          Alguns dos restaurantes destinguem-se com a aplicação de certificados que dão 100% confiança na sua qualidade e no seu empenho para a sustentabilidade.
        </Col>
      </Row>
      
      <Row className="certificados-logo">
        <Col xs lg="4">
          <Row>
            <img src="/cert01.png" alt="Associação Portuguesa de Certificação"></img>
          </Row>
          <p>
            Associação Portuguesa de Certificação
          </p>
        </Col>
        <Col xs lg="4">
          <Row>
            <img src="/cert02.png" alt="Certificação Agricultura Biológica"></img>
          </Row>
          <p>
            Certificação Agricultura Biológica
          </p>
        </Col>
        <Col xs lg="4">
          <Row>
            <img src="/cert03.png" alt="Certificação Planeta Verde"></img>
          </Row>
          <p>
            Certificação Planeta Verde
          </p>
        </Col>
      </Row>

    </Container>
    <Footer />
  </div>
);

export default Home;