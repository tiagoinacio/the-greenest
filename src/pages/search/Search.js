import React, { useEffect, useState } from "react";
import './Search.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { withRouter } from 'react-router-dom';
import { GeoAltFill, TriangleFill } from 'react-bootstrap-icons';
import restaurants from '../../restaurants';
import { Row, Col } from 'react-bootstrap';
import Select, { components } from 'react-select'

const Search = ({ match: { params } }) => {
  const term = params.location.toUpperCase();
  const defaultList = Object.keys(restaurants).map((restaurant) => {
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
  const [list, setList] = useState(defaultList);
  const [restaurantsFilter, setRestaurantsFilter] = useState([]);
  const [cousineFilters, setCousinesFilter] = useState([]);
  const [certificatesFilter, setCertificatesFilter] = useState([]);
  console.log(defaultList);
  const numberOfResultsToShow = 4;
  const numberOfRestaurants = list.length;
  const certificateOptions = [
    { value: 'apcer', label: 'Associação Portuguesa de Certificação' },
    { value: 'biologic', label: 'Certificação Agricultura Biológica' },
    { value: 'green-globe', label: 'Certificação Planeta Verde' }
  ];
  const restaurantOptions = [
    { value: 'Orgânico', label: 'Orgânico' },
    { value: 'Vegetariano', label: 'Vegetariano' },
    { value: 'Gluten Free', label: 'Gluten Free' },
    { value: 'Biológico', label: 'Biológico' },
  ];
  const cousineOptions = [
    { value: 'Saudável', label: 'Saudável' },
    { value: 'Europeia', label: 'Europeia' },
    { value: 'Mediterrânea', label: 'Mediterrânea' },
    { value: 'Internacional', label: 'Internacional' }
  ];


  const onCertificateChange = (e) => {
    setCertificatesFilter(e);
  }

  useEffect(() => {
    let newList = [...defaultList];
    if (certificatesFilter.length) {
      newList = newList.filter(restaurant => restaurant.certificates.some(type => {
        return certificatesFilter.some(option => option.value === type)
      }));
    }

    if (cousineFilters.length) {
      newList = newList.filter(restaurant => restaurant.cousine.some(type => {
        return cousineFilters.some(option => option.value === type)
      }));
    }

    if (restaurantsFilter.length) {
      newList = newList.filter(restaurant => restaurant.type.some(type => {
        return restaurantsFilter.some(option => option.value === type)
      }));
    }

    if (!restaurantsFilter.length && !cousineFilters.length && !certificatesFilter.length) {
      setList(defaultList);
    } else {
      setList(newList);
    }
  }, [restaurantsFilter, certificatesFilter, cousineFilters]);

  const onCousineChange = (e) => {
    setCousinesFilter(e);
  }

  const onRestaurantChange = (e) => {
    setRestaurantsFilter(e);
  }

  const DropdownIndicator = (
    props
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <div className="seta-icone icone">
          <TriangleFill />
        </div>
      </components.DropdownIndicator>
    );
  };
  let restaurantIndex = 0;

  return (
    <>
      <Header theme="light" />
      <div className="lista-pesquisa">
        <div className="container">
          <Row>
            <Col md lg="12">
              <div className="localizacao">
                <div className="localizacao-icon">
                  <GeoAltFill />
                </div>
                <div className="localizacao-detalhe">
                  {params.location}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md lg="4">
              <div className="tipo-filtro detalhe">
                <Select className="select" onChange={onCertificateChange} components={{ DropdownIndicator }} placeholder="Tipo de certificado" isMulti options={certificateOptions} />
              </div>

            </Col>
            <Col md lg="4">
              <div className="tipo-filtro detalhe">
                <Select className="select" onChange={onCousineChange} components={{ DropdownIndicator }} placeholder="Tipo de cozinha" isMulti options={cousineOptions} />
              </div>
            </Col>

            <Col md lg="4">
              <div className="tipo-filtro detalhe">
                <Select className="select" onChange={onRestaurantChange} components={{ DropdownIndicator }} placeholder="Tipo de restaurante" isMulti options={restaurantOptions} />
              </div>
            </Col>
          </Row>

          {!numberOfRestaurants ?
            <h2>Resultados não encontrados.</h2>
            : null
          }

          {
            numberOfRestaurants ? [...Array(Math.ceil(numberOfRestaurants / 2))].map((_, index) => {
              restaurantIndex += 1;
              return (
                <Row>
                  <Col md lg="6">
                    <a className="restaurant-link" href={`/the-greenest/restaurants/${list[index + restaurantIndex - 1].id}`}>
                      <div className="card-restaurante">
                        <div className="card-imagem">
                          <img src={list[index + restaurantIndex - 1].images[0]} alt="season" />
                          <div className="certificates col-6">
                            {
                              list[index + restaurantIndex - 1].certificates.map((certificate) => (
                                <img className="certificate" src={`/the-greenest/${certificate}.png`} alt="Certificação"></img>
                              ))
                            }
                          </div>
                        </div>
                        <div className="card-informacao">
                          <div className="card-informacao-nome">
                            {list[index + restaurantIndex - 1].name}
                          </div>
                          <div className="card-informacao-detalhe">
                            {list[index + restaurantIndex - 1].address}
                            <br />
                            {list[index + restaurantIndex - 1].cousine.map(type => <>{type}<br /></>)}
                            {list[index + restaurantIndex - 1].rating} (cotação)
                          </div>
                        </div>
                      </div>
                    </a>
                  </Col>
                  {list[index + restaurantIndex] ? <Col md lg="6">
                    <a className="restaurant-link" href={`/the-greenest/restaurants/${list[index + restaurantIndex].id}`}>
                      <div className="card-restaurante">
                        <div className="card-imagem">
                          <img src={list[index + restaurantIndex].images[0]} alt="season" />
                          <div className="certificates col-6">
                            {
                              list[index + restaurantIndex].certificates.map((certificate) => (
                                <img className="certificate" src={`/the-greenest/${certificate}.png`} alt="Certificação"></img>
                              ))
                            }
                          </div>
                        </div>
                        <div className="card-informacao">
                          <div className="card-informacao-nome">
                            {list[index + restaurantIndex].name}
                          </div>
                          <div className="card-informacao-detalhe">
                            {list[index + restaurantIndex].address}
                            <br />
                            {list[index + restaurantIndex].cousine.map(type => <>{type}<br /></>)}
                            {list[index + restaurantIndex].rating} (cotação)
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
        <>
          <div className="botao-mais">
            <a href="#">Mostrar mais</a>
          </div>
          <div className="numero-resultado">
            {numberOfResultsToShow}/16
          </div>
        </>
      </div>


      <Footer />
    </>
  );
};

export default withRouter(Search);