import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Main from '../components/main-page';
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
    const logoData = this.props.data.file.childImageSharp
    const about = data.filter(post => post.node.frontmatter.templateKey == "about-page")[0].node
    const djs = data.filter(post => post.node.frontmatter.templateKey == "dj-profile")
    console.log("Data", data)
    return (
      <section className="bg-near-black" >
        <Helmet>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <Main about={about} logoData={logoData}/>
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
                sizes(maxWidth: 500){
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: {eq: "funkyfreshdj_white.png"}) {
      childImageSharp {
        sizes(maxWidth: 200) {
          ...GatsbyImageSharpSizes
        } 
      }
    }
  }
`;
