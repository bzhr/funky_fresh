import React from 'react';


export default function Template({ data }) {
  console.log(data);
  return (
      <section className="">
        I am a DJJJJJ!!!
        <div>HEEEEEEEEEEY</div>
      </section>
  );
};


// export default function Template({ data }) {
//   const { markdownRemark: post } = data;
//   return (
//     <section className="section">
//       <Helmet title={`Blog | ${post.frontmatter.title}`} />
//       <div className="container content">
//         <h1 className="title is-size-2 has-text-info is-bold-light">{post.frontmatter.title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//       </div>
//     </section>
//   );
// }

export const DjProfileQuery = graphql`
query djProfile($path: String!) {
  markdownRemark(frontmatter: { path: {eq: $path } }) {
    html
    frontmatter {
      templateKey
      date(formatString: "MMMM DD, YYYY")
      path
      title
      fb
      twitter
      soundcloud
    }
  }
  }

`



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
