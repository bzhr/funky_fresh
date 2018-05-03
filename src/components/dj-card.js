import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import SocialMediaButton from "./SocialMediaButton";

export default ({ node }) => {
  const data = node.frontmatter

  const img = node.fields.image.childImageSharp;
  const title = data.title;
  const fbLink = data.fb;
  const scLink = data.soundcloud;
  const twitterLink = data.twitter;
  const djUrl = data.path;
  const mailLink = data.mail;
  const instaLink = data.instagram;
  const mixcloudLink = data.mixcloud;
  const promoPack = data.promoPack
  console.log(djUrl, (scLink))

  return (
    <section className="fl tc w-50 w-third-m w-25-l pa2" key={title}>
      <article className="center hide-child relative ba b--silver mw5 db bg-silver">
        <Link to={djUrl}>
          <Img 
            sizes={img.sizes}
            className="db" alt="DJ Photo"
            alt={'DJ image'}
          />
        </Link>
        <div className="w-100 center bt b--black-20">
          <Link
            className="w-100 h-100 ttu tracked tc db link black hover-black-60"
            to={djUrl}
          >
          <h2 className="fw5 f4-ns f6 pt2 v-mid lh-title" style={{height: "3rem"}}> {title} </h2>
          </Link>
        </div>

        <div className="" style={{height: "6rem"}}>
          <div className="fl w-third w-25-ns tc">
            {fbLink ? <SocialMediaButton type={"fb"} link={fbLink} /> : null}
          </div>
          <div className="fl w-third w-25-ns tc">
            {twitterLink ? (
              <SocialMediaButton type={"tw"} link={twitterLink} />
            ) : null}
          </div>
          <div className="fl w-third w-25-ns tc">
            {scLink ? <SocialMediaButton type={"sc"} link={scLink} /> : null}
          </div>
          {/*<div className="fl w-third w-25-ns tc">
            {ytLink ? <SocialMediaButton type={"yt"} link={ytLink} /> : null}
          </div>*/}
          <div className="fl w-third w-25-ns tc">
            {mailLink ? (
              <SocialMediaButton type={"mail"} link={mailLink} />
            ) : null}
          </div>
          <div className="fl w-third w-25-ns tc">
            {instaLink ? (
              <SocialMediaButton type={"insta"} link={instaLink} />
            ) : null}
          </div>
          <div className="fl w-third w-25-ns tc">
            {mixcloudLink ? (
              <SocialMediaButton type={"mixcl"} link={mixcloudLink} />
            ) : null}
          </div>
        </div>
        <a
          className="w-100 link db bg-animate bg-near-black hover-bg-silver f6 br1"
          href={promoPack}
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
