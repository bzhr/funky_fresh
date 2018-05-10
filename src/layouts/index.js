import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import NavBar from './navbar';
require('tachyons');

const Nav = () => (
    <NavBar />
  );

const TemplateWrapper = ({ children }) => (
  <div className="">
    <Helmet title="Funky Fresh">
    <meta property="og:title" content="Funky Fresh DJs"/>
    <meta property="og:type" content="music"/>
    <meta property="og:url" content="http://www.funkyfreshdjs.com"/>
    <meta property="og:image" content="/media/funkyfreshdj.png" />
    </Helmet>
    <NavBar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
