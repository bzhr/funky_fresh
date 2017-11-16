import React from 'react';
import mfdoom from '../pages/djs/img/mfdoom.jpg';
import fb from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import sc from '../img/soundcloud.svg'

export default ({ data }) => {
  return(
    <section className="tc pa3 pa5-ns fl w-33">
      <article className="hide-child relative ba b--black-20 mw5 center">
        <img src={mfdoom} className="db" alt="DJ Photo" />
        <div className="bg-white pa2 bt b--black-20">
          <a className="black-70 ttu tracked tc fw4 f4 db link black hover-black-60" href="#">MF Doom</a>
          {/* <p className="f6 gray mv1">Social Media</p> */}
          <div className="pv2">
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://www.facebook.com/mfdoom/" title="DJ FB">
              <img className="h1" src={fb}></img>
            </a>
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://twitter.com/mfdoom?lang=en" title="DJ Twitter">
              <img className="h1" src={twitter}></img>
            </a>
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://soundcloud.com/mf-doom" title="DJ Soundcloud">
              <img className="h1" src={sc}></img>
            </a>
          </div>
          <a className="h2 link tc ph3 pv1 db bg-animate bg-near-black hover-bg-black-60 white f6 br1" href="#">Download promo pack</a>
        </div>
      </article>
    </section>
  );
};
