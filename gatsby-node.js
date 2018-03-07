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
              img {
                id
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
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

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter.templateKey === 'blog-post') {
      const path = node.frontmatter.image.slice(1, )
      const path2 = node.frontmatter.image2.slice(1, )
      createNodeField({
        node,
        name: `imagePath`,
        value: path
      });
      createNodeField({
        node,
        name: `imagePath2`,
        value: path2
      });
    }
  }
}
