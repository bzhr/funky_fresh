import React from 'react';
import logo from '../img/funkyfreshdj.png'

export default ({ data }) => {
  const orangeBackgroung = {backgroundColor: "#F48120", opacity: "0.7", zIndex: "800"}
  return (
      <section style={orangeBackgroung} className="black-70 baskerville vh-100 vw-100 pa3 pa5-ns bt b--black-1">
        <div className="mw8 center" >
          {/* <div className="video vh-100 vw-100">
            <iframe className="z-200 vh-100 vw-100" src="https://www.youtube.com/embed/hqFmPZzxEEE?controls=0&showinfo=0&rel=0&autoplay=1&loop=1" frameBorder="0" allowFullScreen />
          </div> */}
          {/* <div className="pt5 pb4 mw5 center">
            <img className="w-100" src={logo} alt="Funky Fresh Logo" />
          </div>
          <div className="pa3 tc measure mw6 center f3" dangerouslySetInnerHTML={{ __html: data.excerpt }}/> */}
        </div>
      </section>
  );
};
