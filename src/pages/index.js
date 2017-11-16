import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import About from '../templates/about-page';
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
    return (
      <section className="debug" >
        <Helmet>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <div className="z-3">
          <About data={this.props}/>
          <Djs data={"asdasd"} />
        </div>
        {/* <section >
          <h2 className="athelas ph3 ph0-l">Blog</h2>
          {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => {
            return (
              <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>
                <p>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-info is-small" to={post.frontmatter.path}>
                    Keep Reading
                  </Link>
                </p>
              </div>
            );
          })}
        </section> */}
      </section>
    );
  }
}

// Ova kveri e za /blog
// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           html
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//             path
//           }
//         }
//       }
//     }
//   }
// `;
export const frontPageQuery = graphql`
  query frontPage {
    markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
      excerpt(pruneLength: 400)
      frontmatter {
        path
        title
      }
    }
  }
`;
