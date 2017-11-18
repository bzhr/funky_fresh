import React from 'react';
import Link from 'gatsby-link';
import mfdoom from '../pages/djs/img/mfdoom.jpg';
import fb from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import sc from '../img/soundcloud.svg'

export default ({ data }) => {
  const title = data.title
  const fbLink = data.fb
  const scLink = data.soundcloud
  const twitterLink = data.twitter
  const djUrl = data.path
  return(
    <section className="fl tc w-50 w-third-m w-25-l pa2" key={title}>
      <article className="center hide-child relative ba b--black-20 mw5 db">
        <Link to={djUrl}>
          <img src={mfdoom} className="db" alt="DJ Photo" />
        </Link>
        <div className="bg-white pa2 bt b--black-20">
          <Link className="black-70 ttu tracked tc fw4 f4 db link black hover-black-60" to={djUrl}>{title}</Link>
          <div className="pv2">
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" target="_blank" href={fbLink} title="DJ FB">
              <img className="h1" src={fb}></img>
            </a>
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" target="_blank" href={twitterLink} title="DJ Twitter">
              <img className="h1" src={twitter}></img>
            </a>
            <a className="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" target="_blank" href={scLink} title="DJ Soundcloud">
              <img className="h1" src={sc}></img>
            </a>
          </div>
        </div>
        <a className="w-100 h-100 h2 link tc ph3 pv1 db bg-animate bg-near-black hover-bg-black-60 white f6 br1" href="#">
          <p>Download promo pack</p>
        </a>
      </article>
    </section>
  );
};
