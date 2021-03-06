import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Main from "../components/main-page";
import PromoVideo from "../components/promo-video";
import Djs from "../components/djs";

export default class IndexPage extends React.Component {
  render() {
    console.log(this.props.data.allFile)
    const files = this.props.data.allFile
    const data = this.props.data.allMarkdownRemark.edges;
    const logoData = this.props.data.file.childImageSharp;
    const about = data.filter(
      post => post.node.frontmatter.templateKey == "about-page"
    )[0].node;
    const djs = data.filter(
      post => post.node.frontmatter.templateKey == "dj-profile"
    );
    const orderedDjs = djs.sort(function(a, b) {
      return a.node.frontmatter.title
        .toLowerCase()
        .localeCompare(b.node.frontmatter.title.toLowerCase());
    });
    return (
      <section className="bg-near-black">
        <Main about={about} logoData={logoData} />
        <Djs data={orderedDjs} files={files} />
      </section>
    );
  }
}

export const frontPageQuery = graphql`
  query frontPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
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
            mail
            instagram
            mixcloud
            promoPack
          }
          fields {
            image {
              childImageSharp {
                original {
                  src
                }
                sizes(maxWidth: 500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "funkyfreshdj_white.png" }) {
      childImageSharp {
        sizes(maxWidth: 200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allFile(filter: {extension: {eq: "zip"}}) {
      edges {
        node {
          publicURL,
          id
          relativePath
        }
      }
    }
  }
`;
