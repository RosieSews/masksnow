const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const markdownResults = await wrapper(
    graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                templateKey
              }
            }
          }
        }
      }
    `)
  );

  // const airTableResults = await wrapper(
  //   graphql(`
  //     {
  //       allAirtable(filter: { table: { eq: "Groups" } }) {
  //         nodes {
  //           data {
  //             Name
  //             url
  //           }
  //           recordId
  //         }
  //       }
  //     }
  //   `)
  // );

  const posts = markdownResults.data.allMarkdownRemark.edges;

  posts.forEach(edge => {
    const id = edge.node.id;
    // console.log("edge:", edge);
    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/pages/${String(edge.node.frontmatter.templateKey)}`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  // Tag pages:
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type AuthorJson implements Node @dontInfer {
//       name: String!
//       firstName: String!
//       email: String!
//       joinedAt: Date
//     }
//   `
//   createTypes(typeDefs)
// }
