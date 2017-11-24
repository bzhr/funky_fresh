import React from 'react';
import Helmet from 'react-helmet';
import Soundcloud from 'react-soundcloud-widget';
import SocialMediaButton from '../components/SocialMediaButton';
import fb from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import sc from '../img/soundcloud.svg';


export default function Template({ data }) {
  const fbLink = data.markdownRemark.frontmatter.fb
  const twitterLink = data.markdownRemark.frontmatter.twitter
  const scLink = data.markdownRemark.frontmatter.soundcloud
  return (
      <section className="bg-light-gray pa5-ns bt baskerville w-100 pa3 pa5-ns">
        <Helmet title={`DJ | ${data.markdownRemark.frontmatter.title}`} />
        <h1 className="ttu tracked f1 fw4 pt4">{data.markdownRemark.frontmatter.title}</h1>
        {fbLink ? (<SocialMediaButton icon={fb} link={fbLink} />) : null}
        {twitterLink ? (<SocialMediaButton icon={twitter} link={twitterLink} />) : null}
        {scLink ? (<SocialMediaButton icon={sc} link={scLink} />) : null}
        <div className="measure lh-copy" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
        <Soundcloud url={data.markdownRemark.frontmatter.promoMix} />
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
      promoMix
    }
  }
  }

`
