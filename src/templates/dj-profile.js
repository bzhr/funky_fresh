import React from 'react';
import Helmet from 'react-helmet';
import Soundcloud from 'react-soundcloud-widget';
import SocialMediaButton from '../components/SocialMediaButton';
import fb from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import sc from '../img/soundcloud.svg';


export default function Template({ data }) {
  return (
      <section className="bg-light-gray pa5-ns bt baskerville w-100 pa3">
        <Helmet title={`DJ | ${data.markdownRemark.frontmatter.title}`} />
        <h1 className="ttu tracked f1 fw4">{data.markdownRemark.frontmatter.title}</h1>
        <SocialMediaButton icon={fb} link={data.markdownRemark.frontmatter.fb} />
        <SocialMediaButton icon={twitter} link={data.markdownRemark.frontmatter.twitter} />
        <SocialMediaButton icon={sc} link={data.markdownRemark.frontmatter.soundcloud} />
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
