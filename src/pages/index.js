import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import About from '../components/about-page';
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
    const orangeBackgroung = {backgroundColor: "#F48120"}
    const data = this.props.data.allMarkdownRemark.edges
    const about = data.filter(post => post.node.frontmatter.templateKey == "about-page")[0].node
    const djs = data.filter(post => post.node.frontmatter.templateKey == "dj-profile")
    return (
      <section className="debug" >
        <Helmet>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
          <About data={about}/>
          <Djs data={djs}/>
      </section>
    );
  }
}


// export const frontPageQuery = graphql`
//   query frontPage {
//     markdownRemark {
//       excerpt(pruneLength: 400)
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;

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
            date
            title
            fb
            twitter
            soundcloud
          }
        }
      }
  }
}`;
