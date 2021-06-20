import React from 'react';
import './Search.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { withRouter } from 'react-router-dom';
import { TriangleFill } from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';
import restaurants from '../../restaurants';
import { Row, Col } from 'react-bootstrap';

const Search = ({ match: { params } }) => {
  const term = params.location.toUpperCase();
  const list = Object.keys(restaurants).map((restaurant) => {
    if (
      restaurants[restaurant].name.toUpperCase().includes(term)
      ||
      restaurants[restaurant].description.toUpperCase().includes(term)
      ||
      restaurants[restaurant].tags.some(tag => tag.toUpperCase().includes(term))
      ||
      restaurants[restaurant].address.toUpperCase().includes(term)
    ) {
      return restaurants[restaurant];
    }
    return null;
  }).filter(x => !!x);
  const numberOfResultsToShow = 4;
  const numberOfRestaurants = list.length;

  return (
    <>
      <Header theme="light" />
      <div className="lista-pesquisa">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="localizacao">
                <div className="localizacao-icon">
                  <GeoAltFill />
                </div>
                <div className="localizacao-detalhe">
                  {params.location}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="filtro-pesquisa">
                <div className="tipo-filtro">
                  <div className="detalhe">
                    Tipo de certificado
                  </div>
                  <div className="seta-icone icone">
                    <TriangleFill />
                  </div>
                </div>

              </div>
            </div>
            <div className="col-4">
              <div className="filtro-pesquisa">
                <div className="tipo-filtro">
                  <div className="detalhe">
                    Tipo de cozinha
                  </div>
                  <div className="seta-icone icone">
                    <TriangleFill />
                  </div>
                </div>

              </div>
            </div>
            <div className="col-4">
              <div className="filtro-pesquisa">
                <div className="tipo-filtro">
                  <div className="detalhe">
                    Tipo de restaurante
                  </div>
                  <div className="seta-icone icone">
                    <TriangleFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!numberOfRestaurants ?
            <h2>Resultados não encontrados.</h2>
            : null
          }

          {
            numberOfRestaurants ? [Math.round(numberOfRestaurants / 2)].map((_, index) => {
              return (
                <Row>
                  <Col xs lg="6">
                    <a className="restaurant-link" href={`/the-greenest/restaurants/${list[index].id}`}>
                      <div className="card-restaurante">
                        <div className="card-imagem">
                          <img src={list[index].images[0]} alt="season" />
                        </div>
                        <div className="card-informacao">
                          <div className="card-informacao-nome">
                            {list[index].name}
                          </div>
                          <div className="card-informacao-detalhe">
                            {list[index].address}
                            <br />
                            Orgânica<br />
                            {list[index].rating} (cotação)
                          </div>
                        </div>
                      </div>
                    </a>
                  </Col>
                  {list[index + 1] ? <Col xs lg="6">
                    <a className="restaurant-link" href={`/the-greenest/restaurants/${list[index + 1].id}`}>
                      <div className="card-restaurante">
                        <div className="card-imagem">
                          <img src={list[index + 1].images[0]} alt="season" />
                        </div>
                        <div className="card-informacao">
                          <div className="card-informacao-nome">
                            {list[index + 1].name}
                          </div>
                          <div className="card-informacao-detalhe">
                            {list[index + 1].address}
                            <br />
                            Orgânica<br />
                            {list[index + 1].rating} (cotação)
                          </div>
                        </div>
                      </div>
                    </a>
                  </Col> : null
                  }
                </Row>
              )
            })
          : null
          }
        </div>
        {list.length > numberOfResultsToShow ?
          <>
            <div className="botao-mais">
              <a href="#">Mostrar mais</a>
            </div>
            <div className="numero-resultado">
              {numberOfResultsToShow}/{list.length}
            </div>
          </>
          : null}
      </div>


      <Footer />
    </>
  );
};

export default withRouter(Search);