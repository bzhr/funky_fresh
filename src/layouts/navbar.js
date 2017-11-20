import React from 'react';
import Link from 'gatsby-link';

export default () => {
  const textStyle={color: "#F48120"}
  return (
    // Add "fixed" class to header to fix header on scrolling
    <header className="z-999 fixed bg-near-black w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
       <nav className="6 fw6 ttu tracked">
         <Link className="link dim white dib mr3" style={textStyle} to="/" title="Funky Fresh">Funky Fresh</Link>
         <Link className="link dim white dib mr3" style={textStyle} to="/blog" title="Blog">Blog</Link>
       </nav>
    </header>
  );
};
