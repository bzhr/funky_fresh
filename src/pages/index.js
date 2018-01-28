import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import About from '../components/about-page';
import PromoVideo from '../components/promo-video';
import Djs from '../components/djs';

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }

  render() {
    const data = this.props.data.allMarkdownRemark.edges
    const about = data.filter(post => post.node.frontmatter.templateKey == "about-page")[0].node
    const djs = data.filter(post => post.node.frontmatter.templateKey == "dj-profile")
    return (
      <section className="" >
        <Helmet>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <About data={about}/>
        <Djs data={djs}/>
      </section>
    );
  }
}

export const frontPageQuery = graphql`
  query frontPage {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 400)
          html
          id
          frontmatter {
            templateKey
            path
            title
            fb
            twitter
            soundcloud
            youtube
            mail
            img {
              childImageSharp {
                original {
                  src
                }
                resolutions(width: 250, height: 300){
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;
