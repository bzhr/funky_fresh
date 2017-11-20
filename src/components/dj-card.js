import React from 'react';
import Link from 'gatsby-link';
import SocialMediaButton from './SocialMediaButton';

import mfdoom from '../pages/djs/img/mfdoom.jpg';
import fb from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import sc from '../img/soundcloud.svg';

export default ({ data }) => {
  const title = data.title
  const fbLink = data.fb
  const scLink = data.soundcloud
  const twitterLink = data.twitter
  const djUrl = data.path
  return(
    <section className="fl tc w-50 w-third-m w-25-l pa2" key={title}>
      <article className="center hide-child relative ba b--black- mw5 db">
        <Link to={djUrl}>
          <img src={mfdoom} className="db" alt="DJ Photo" />
        </Link>
        <div className="bg-white pa2 bt b--black-20">
          <Link className="black-70 ttu tracked tc fw4 f4 db link black hover-black-60" to={djUrl}>{title}</Link>
          <div className="pv2">
            <SocialMediaButton icon={fb} link={fbLink} />
            <SocialMediaButton icon={twitter} link={twitterLink} />
            <SocialMediaButton icon={sc} link={scLink} />
          </div>
        </div>
        <a className="w-100 link db bg-animate bg-near-black hover-bg-black-50 f6 br1" href="#">
          <div className="w-100 h-100 dt">
            <p className="vh-mid h-100 lh-copy tc white">Download promo pack</p>
          </div>
        </a>
      </article>
    </section>
  );
};
