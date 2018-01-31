import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import SocialMediaButton from "./SocialMediaButton";

export default ({ data }) => {
  const title = data.title;
  const fbLink = data.fb;
  const scLink = data.soundcloud;
  const twitterLink = data.twitter;
  const djUrl = data.path;
  const img = data.img.childImageSharp.original.src;
  const ytLink = data.youtube;
  const mailLink = data.mail;

  return (
    <section className="fl tc w-50 w-third-m w-25-l pa2" key={title}>
      <article className="center ph2 hide-child relative ba b--silver mw5 db">
        <Link to={djUrl}>
          <Img 
            sizes={data.img.childImageSharp.sizes}
            className="db" alt="DJ Photo"
            alt={'DJ image'}
          />
          {/*<img src={img} className="db" alt="DJ Photo" />*/}
        </Link>
        <div className="w-100 center bg-white bt b--black-20">
          <Link
            className="w-100 h-100 black-70 ttu tracked tc fw5-l f5-l fw5-m f5-m fw7-ns f7-ns db link black hover-black-60 h2"
            to={djUrl}
          >
          <h2 className="fw5 f2-ns ph1 v-mid lh-title"> {title} </h2>
          </Link>
        </div>

        <div className="cf bg-white pa2 ">
          <div className="fl w-50 w-20-ns tc">
            {fbLink ? <SocialMediaButton type={"fb"} link={fbLink} /> : null}
          </div>
          <div className="fl h-25 w-50 w-20-ns tc">
            {twitterLink ? (
              <SocialMediaButton type={"tw"} link={twitterLink} />
            ) : null}
          </div>
          <div className="fl w-50 w-20-ns tc">
            {scLink ? <SocialMediaButton type={"sc"} link={scLink} /> : null}
          </div>
          <div className="fl w-50 w-20-ns tc">
            {ytLink ? <SocialMediaButton type={"yt"} link={ytLink} /> : null}
          </div>
          <div className="fl w-50 w-20-ns tc">
            {mailLink ? (
              <SocialMediaButton type={"mail"} link={mailLink} />
            ) : null}
          </div>
        </div>
        <a
          className="w-100 link db bg-animate bg-near-black hover-bg-silver f6 br1"
          href="#"
        >
          <div className="w-100 h2 dt hover-bg-silver">
            <p className="dtc v-mid pa3 fw4 f6 h-100 lh-copy tc white">
              Download promo pack
            </p>
          </div>
        </a>
      </article>
    </section>
  );
};
