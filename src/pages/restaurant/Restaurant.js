import React from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import './Restaurant.css';
import { GeoAltFill } from 'react-bootstrap-icons';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import restaurants from '../../restaurants';


const Restaurant = ({ match: { params } }) => {
  const { id } = params;
  const restaurant = restaurants[id];

  return (
    <>
      <Header theme="light" />
      <Container className="restaurant-detail">
        <Row>
          <Col xs lg="12" className="localizacao">
            <Col xs lg="6">
              <h2 className="h-nome">{restaurant.name}</h2>
              <h3 className="nome-localizaco">
                <GeoAltFill />{restaurant.address}
              </h3>
            </Col>
            <Col xs lg="6">
              <h2 className="rating">{restaurant.rating}</h2>
            </Col>
          </Col>


          <Carousel nextLabel="" prevLabel="">
            {
              restaurant.images.map(image => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={image}
                  />
                </Carousel.Item>
              ))
            }
          </Carousel>

          <div className="nossa-sustentabilidade">
            <div className="col-12 col-md-6"><h3 className="titulo-one">A NOSSA SUSTENTABILIDADE</h3></div>
            <div className="col-12 nossa-sustentabilidade-detalhes">{restaurant.description}
            </div><br />

            {restaurant.certificates.length ? (
              <>
                <div className="col-12 col-md-3 nossa-sustentabilidade-detalhes">Certificados com:</div>
                <br />
                <div className="col-12 col-md-12">
                  {restaurant.certificates.map((certificate) => (
                    <img src={`/${certificate}.png`} alt={certificate} />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </Row>

        <Row>
          <div className="col-12 nome-localizaco">
            <h3 className="nome-horario">HORÁRIO</h3>
          </div>
          <div className="horario-detalhe">
            {
              Object.keys(restaurant.openingHours).map(days => {
                return (
                  <Row>
                    <Col xs lg="3">
                      {days}
                    </Col>

                    {
                      restaurant.openingHours[days].map(hours => (
                        <Col xs lg="3">
                          {hours}
                        </Col>
                      ))
                    }
                  </Row>
                )
              })
            }
          </div>


          <div className="col-12 col-md-4 offset-md-5 button-reservar">
            <br /><br /> <button>Reservar mesa</button>
          </div>
        </Row>

        <div className="comentarios">
          <div className="col-12 col-md-12"><h3 className="nome-comentario">COMENTÁRIOS</h3></div>
          {
            restaurant.comments.map(comment => (
              <div className="col-12">
                <h3 className="name-comentarios">{comment.username}</h3>
                <h4 className="localizacao-comentario">{comment.location}
                  <br />{comment.rating} (cotação)</h4>
                <div className="comentario-detalhe">{comment.comment}</div> <br />
              </div>
            ))
          }

          <div className="col-12 col-md-6 offset-md-5">
            <button>Mostrar mais</button>
          </div>  <br />
          <div className="col-12 col-md-6 offset-md-6 numeracao">
            4/12
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default withRouter(Restaurant);