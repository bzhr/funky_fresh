import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import NavBar from './navbar';
import SEO from '../components/SEO'
require('tachyons');

const Nav = () => (
    <NavBar />
  );

const TemplateWrapper = ({ children }) => (
  <div className="">
    <Helmet title="Funky Fresh">
      <SEO />
    </Helmet>
    <NavBar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
