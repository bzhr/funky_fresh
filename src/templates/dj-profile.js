import React from "react";
import Helmet from "react-helmet";
import Soundcloud from "react-soundcloud-widget";
import URL from "url-parse";

import SocialMediaButton from "../components/SocialMediaButton";
import MixcloudEmbed from "../components/MixcloudEmbed";
import fb from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import sc from "../img/soundcloud.svg";
import mail from "../img/mail.svg";
import youtube from "../img/youtube.svg";

export default function Template({ data }) {
  const fbLink = data.markdownRemark.frontmatter.fb;
  const twitterLink = data.markdownRemark.frontmatter.twitter;
  const scLink = data.markdownRemark.frontmatter.soundcloud;
  const promoMixLink = data.markdownRemark.frontmatter.promoMix;
  const mailAddress = data.markdownRemark.frontmatter.mail;

  let url = "";
  function createPromoMix() {
    if (promoMixLink) {
      if (promoMixLink.includes("mixcloud")) {
        url = URL(promoMixLink);
        const user = url.pathname.split("/")[1];
        const mixName = url.pathname.split("/")[2];
        url = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&autoplay=0&feed=%2F${
          user
        }%2F${mixName}%2F`;
        const PromoMix = MixcloudEmbed
        return PromoMix
      } else {
        const PromoMix = Soundcloud
        return PromoMix
      }
    }
  }
  const PromoMix = createPromoMix()
  if (url == "") {
    url = promoMixLink
  }

  return (
    <div className="bg-light-gray">
      <section className="mb5 pa5-ns bt w-100">
        <Helmet title={`DJ | ${data.markdownRemark.frontmatter.title}`} />
        <h1 className="ttu tracked f1 fw4 pt4">
          {data.markdownRemark.frontmatter.title}
        </h1>
        <div className="cf pa2 measure">
            <div className="fl w-20 tc">
              {fbLink ? <SocialMediaButton type={"fb"} link={fbLink} /> : null}
            </div>
            <div className="fl h-25 w-20 tc">
              {twitterLink ? (
                <SocialMediaButton type={"tw"} link={twitterLink} />
              ) : null}
            </div>
            <div className="fl w-20 tc">
              {scLink ? <SocialMediaButton type={"sc"} link={scLink} /> : null}
            </div>
            {/*<div className="fl w-20 tc">
              {ytLink ? <SocialMediaButton type={"yt"} link={ytLink} /> : null}
            </div>*/}
            <div className="fl w-20 tc">
              {mailAddress ? (
                <SocialMediaButton type={"mail"} link={mailAddress} />
              ) : null}
            </div>
          </div>

        <div
          className="measure lh-copy pv5 pv2-ns"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </section>
      <footer className="bottom-0 bg-near-black w-100 tc-l z-998 fixed">
        {promoMixLink ? <PromoMix url={url} /> : null}
      </footer>
    </div>
  );
}

export const DjProfileQuery = graphql`
  query djProfile($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        templateKey
        path
        title
        fb
        twitter
        soundcloud
        mail
        promoMix
      }
    }
  }
`;
