import React from "react";
import Helmet from "react-helmet";
import SocialLinks from "../components/social-links";
import Img from "gatsby-image";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const img1 = post.fields.imagePath;
  const img2 = post.fields.imagePath2;
  return (
    <section className="bg-light-gray pa5-ns bt w-100 pa3">
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <article className="">
        <h1 className="f3 f1-m f-headline-l ttu tracked f1 fw3 pt5">
          {post.frontmatter.title}
        </h1>
        {img1 ? (
          <Img className="ma3-ns ma2" sizes={img1.childImageSharp.sizes} alt="Photo" />
        ) : null}
        <div
          className="measure lh-copy"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {img2 ? (
          <Img className="ma3-ns ma2" sizes={img2.childImageSharp.sizes} alt="Photo" />
        ) : null}
        <SocialLinks
          postPath={post.frontmatter.path}
          postNode={data.markdownRemark}
        />
      </article>
    </section>
  );
}

export const singleBlogQuery = graphql`
  query singleBlog($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        image
      }
      fields {
        imagePath {
          childImageSharp {
            original {
              src
            }
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        imagePath2 {
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
`;
