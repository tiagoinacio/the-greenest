import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import Carousel from '../../components/carousel/Carousel';
import './Home.css';
import { ReactComponent as Logo } from '../../assets/svgs/thegreenest01.svg';
import { ReactComponent as Android } from '../../assets/svgs/android.svg';
import { ReactComponent as IOS } from '../../assets/svgs/ios.svg';
import { ReactComponent as At } from '../../assets/svgs/at.svg';
import { ReactComponent as Phone } from '../../assets/svgs/phone.svg';
import { ReactComponent as Email } from '../../assets/svgs/mail.svg';

const Home = () => (
  <div className="home">
    <Header />
    <Hero />
    <Container>
      <Row className="home-title" id="top">
        <Col xs lg="5">
          <h1>OS RESTAURANTES MAIS GREENEST</h1>
        </Col>
      </Row>
      <Row>
        <Col xs lg="12">
          <Carousel />
        </Col>
      </Row>

      <Row id="sobre-nos" className="home-title">
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
            <Col className="mission-vision-dital" xs lg="6">
              Sustentabilidade - Comer hoje sem comprometer o amanhã<br />
              Comunidade - Envolver e dar voz à nossa tribo<br />
              Sensibilização - Tornar consciente as nossas escolhas na alimentação.
            </Col>
            <Col className="mission-vision-dital" xs lg="6">
              Através de uma plataforma fácil e intuitiva conectamos pessoas e estabelecimentos do ramo alimentar com práticas orientadas para sustentáveis.
            </Col>
          </Row>
        </Col>
      </Row>

      <Row id="certificados" className="certificados">
        <Col xs lg="6">
          <h1>QUE CERTIFICADOS PODES ENCONTRAR</h1>
        </Col>
      </Row>

      <Row>
        <Col className="mission-vision-dital" xs lg="12">
          Alguns dos restaurantes destinguem-se com a aplicação de certificados que dão 100% confiança na sua qualidade e no seu empenho para a sustentabilidade.
        </Col>
      </Row>

      <Row className="certificados-logo">
        <Col xs lg="4">
          <Row>
            <img src="/the-greenest/apcer.png" alt="Associação Portuguesa de Certificação"></img>
          </Row>
          <p className="smission-vision-dital-certificados">
            Associação Portuguesa de Certificação
          </p>
        </Col>
        <Col xs lg="4">
          <Row>
            <img src="/the-greenest/cert02.png" alt="Certificação Agricultura Biológica"></img>
          </Row>
          <p className="mission-vision-dital-certificados">
            Certificação Agricultura Biológica
          </p>
        </Col>
        <Col xs lg="4">
          <Row>
            <img src="/the-greenest/green-globe.png" alt="Certificação Planeta Verde"></img>
          </Row>
          <p className="mission-vision-dital-certificados">
            Certificação Planeta Verde
          </p>
        </Col>
      </Row>

    </Container>


    <Row id="quero-ser-green" className="restaurante-greenest">
      <Container>
        <h1>TORNA O TEU RESTAURANTE GREENEST</h1>
        <p>Se praticas boas práticas para tornares o teu restaurante mais sustentável e queres ter o teu restaurante como uma referência Greenest, então sabe mais como te podes juntar à nossa essência e clica em saber mais para fazer parte da nossa comunidade.</p>
        <div className="button-container">
          <Button>Saber Mais</Button>
        </div>
      </Container>
    </Row>

    <Row id="app" className="segue-restaurantes">
      <Container>
        <h1>SEGUE OS RESTAURANTES SUSTENTÁVEIS NA NOSSA APP</h1>

        <Row>

          <Col xs lg="5">
            <Logo />
          </Col>
          <Col xs lg="2" />
          <Col xs lg="5" className="mobile-platforms">
            <Row><IOS /></Row>
            <Row><Android /></Row>
          </Col>

        </Row>
      </Container>
    </Row>


    <Row id="contactos" className="contacta-nos">
      <Container>
        <Row>
        <Col xs lg="6">
          <h1>CONTACTA-NOS!</h1>
        </Col>

        <Col xs lg="6">
          <Row><div className="contacts-row"><At /><span>hello@thegreenest.eu</span></div></Row>
          <Row><div className="contacts-row">&nbsp;<Phone /><span>+351 216 789 678</span></div></Row>
          <Row><div className="contacts-row"><Email /><span>Rua Abade Faria, nº27 1900-007 Lisboa</span></div></Row>
        </Col>
        </Row>
      </Container>
    </Row>

    <Footer />
  </div >
);

export default Home;