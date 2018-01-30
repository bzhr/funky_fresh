import React from 'react';
import Helmet from 'react-helmet';
import Soundcloud from 'react-soundcloud-widget';
import URL from 'url-parse';

import SocialMediaButton from '../components/SocialMediaButton';
import MixcloudEmbed from '../components/MixcloudEmbed';
import fb from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import sc from '../img/soundcloud.svg';
import mail from '../img/mail.svg';
import youtube from '../img/youtube.svg';


export default function Template({ data }) {
  const fbLink = data.markdownRemark.frontmatter.fb
  const twitterLink = data.markdownRemark.frontmatter.twitter
  const scLink = data.markdownRemark.frontmatter.soundcloud
  const promoMixLink = data.markdownRemark.frontmatter.promoMix
  const mailAddress = data.markdownRemark.frontmatter.mail
  const ytLink = data.markdownRemark.frontmatter.youtube

  let url = ""
  if (promoMixLink.includes("mixcloud")) {
    url = URL(promoMixLink)
    const user = url.pathname.split("/")[1]
    const mixName  = url.pathname.split("/")[2]
    url = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&autoplay=0&feed=%2F${user}%2F${mixName}%2F`
  }
  return (
      <section className="bg-light-gray pa5-ns bt w-100 pa3">
        <Helmet title={`DJ | ${data.markdownRemark.frontmatter.title}`} />
        <h1 className="ttu tracked f1 fw4 pt4">{data.markdownRemark.frontmatter.title}</h1>
        {fbLink ? (<SocialMediaButton icon={fb} link={fbLink} />) : null}
        {twitterLink ? (<SocialMediaButton icon={twitter} link={twitterLink} />) : null}
        {scLink ? (<SocialMediaButton icon={sc} link={scLink} />) : null}
        {mailAddress ? (<SocialMediaButton icon={mail} link={mailAddress} />) : null}
        {ytLink ? (<SocialMediaButton icon={youtube} link={ytLink} />) : null}

        <div className="measure lh-copy" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
        {url ? (<MixcloudEmbed src={url} />) : (<Soundcloud url={promoMixLink} />)}
      </section>
  );
};

export const DjProfileQuery = graphql`
  query djProfile($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path } }) {
      html
      frontmatter {
        templateKey
        path
        title
        fb
        twitter
        soundcloud
        youtube
        mail
        promoMix
      }
    }
  }
`
