import React from 'react';
import Helmet from 'react-helmet';
import SocialLinks from '../components/social-links';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  console.log(post.frontmatter.path);
  return(
    <section className="bg-light-gray pa5-ns bt baskerville w-100 pa3">
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <article className="pa3 pa5-ns">
        <h1 className="f3 f1-m f-headline-l">{post.frontmatter.title}</h1>
        <SocialLinks postPath={post.frontmatter.path} postNode={data.markdownRemark} />
        <div className="measure lh-copy" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </section>
  );
};

export const singleBlogQuery = graphql`
  query singleBlog($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
