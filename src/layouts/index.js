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
    {/* OpenGraph */}
    <meta property="og:locale" content="en-US" />
    <meta property="og:site_name" content="Funky Fresh DJs" />
    <meta property="og:url" content="https://www.funkyfreshdjs.com" />
    <meta property="og:type" content="main" />
    <meta property="og:title" content="Funky Fresh DJs" />
    <meta property="og:description" content="Funky Frsh DJs info, news and booking" />
    <meta property="og:image" content="https://www.funkyfreshdjs.com/media/funkyfreshdj.png" />
    </Helmet>
    <NavBar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
