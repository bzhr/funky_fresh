const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
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
              image
              image2
              img
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    console.log("RESULT", result)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let tKey = node.frontmatter.templateKey;
      if (tKey == "dj-profile" || tKey == "blog-post") {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          context: {} // additional data can be passed via context
        });
      }
    });
  });
};

// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//   const { createNodeField } = boundActionCreators
//   if (node.internal.type === 'MarkdownRemark') {
//     if (node.frontmatter.templateKey === 'blog-post') {
//       createNodeField({
//         node,
//         name: `happiness`,
//         value: `is sweet graphql queries`
//       });
//     }
//   }
// }
