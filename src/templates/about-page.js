// import React from 'react';
//
// export default ({ data }) => {
//   // const { data } = this.props
//   console.log(this.props);
//   console.log(data);
//   const about = data.markdownRemark
//   return (
//     <section className="baskerville mw8 center">
//       <h2 className="ttu tracked f-subheadline tc fw4">{about.frontmatter.title}</h2>
//       <div className="f3" dangerouslySetInnerHTML={{ __html: about.excerpt }} />
//     </section>
//   );
// };
//
// export const aboutPageQuery = graphql`
//   query AboutPage($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;

import React from 'react';

export default ({ data }) => {
  const post  = data.data.markdownRemark;
  const orangeBackgroung = {backgroundColor: "#F48120"}
  console.log("I am in about page, post");
  console.log(post)
  return (
      <section style={orangeBackgroung} className="black-70 baskerville w-100 pa3 pa5-ns bt b--black-1">
        <div className="mw8 center">
          <h2 className="ttu tracked f1 tc fw4">{post.frontmatter.title}</h2>
          <div className="mw6 center f3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
      </section>
  );
};

// export const aboutPageQuery = graphql`
//   query aboutPage {
//     markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
//       excerpt(pruneLength: 400)
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;
