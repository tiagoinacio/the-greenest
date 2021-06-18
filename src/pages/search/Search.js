import React from 'react';
import './Search.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { withRouter } from 'react-router-dom';

const Search = ({ match: { params } }) => {

  return (
    <>
      <Header />
      <div>{params.id}</div>
      <Footer />
    </>
  );
};

export default withRouter(Search);