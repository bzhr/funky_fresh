import React from 'react';
import logo from '../img/funkyfreshdj_white.png'

export default ({ data }) => {
  return (
      <section className="bg-near-black black-70 helvetica pa3 pa5-ns bt b--black-1">
        <div className="mw8 center" >
          <div className="pt5 pb4 mw5 center">
            <img className="w-100 svg" style={{svg: "white"}} src={logo} alt="Funky Fresh Logo" />
          </div>
          <div className="pa3 tc measure white mw6 center f3" dangerouslySetInnerHTML={{ __html: data.excerpt }}/>
        </div>
      </section>
  );
};
