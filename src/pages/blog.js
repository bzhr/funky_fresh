import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const blogPosts = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.templateKey == 'blog-post')
  return(
    <div className="bg-light-gray pa5-ns bt baskerville w-100 pa3">
      <Helmet title={`Funky Fresh | Blog`} />
      <section className="pa3 mw7 center avenir">
        <h2 className="baskerville fw1 ph3 ph0-l">Blog</h2>
        {blogPosts.map(({node: post}) => {
          return (
            <article key={post.id} className="content pa2 bt bb b--black-10">
              <Link className="db pv4 ph3 ph0-l no-underline black dim" to={post.frontmatter.path}>
              <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="Photo of a dimly lit room with a computer interface terminal."/>
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">{post.frontmatter.title}</h1>
                <p className="f6 f5-l lh-copy">{post.excerpt}</p>
                <p className="f6 lh-copy mv0">{post.frontmatter.date}</p>
                </div>
              </div>
              </Link>
            </article>
          )
        })}
      </section>
    </div>
  );
};

export const allBlogsQuery = graphql`
  query BlogQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          path
        }
      }
    }
  }
}
`
