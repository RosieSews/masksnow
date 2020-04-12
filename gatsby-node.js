const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      patterns: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//content/patterns//" }
          fields: { slug: { ne: "/" } }
        }
        limit: 1000
      ) {
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
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//src/pages//" } }
        limit: 1000
      ) {
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
  `);
  if (errors) {
    errors.forEach(e => console.error(e.toString()));
    return Promise.reject(errors);
  }

  const { pages, patterns } = data;

  patterns.edges.forEach(edge => {
    const id = edge.node.id;
    createPage({
      path: `/patterns${edge.node.fields.slug}`,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  pages.edges.forEach(edge => {
    const id = edge.node.id;
    const infographicHomepage = edge.node.frontmatter.infographicHomepage;
    // console.log('FRONTMATTER:', edge.node.frontmatter);
    if (infographicHomepage) {
      // build a "page" that ignores all the content and instead displays the new
      // infographic
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/pages/infographic-page.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    } else {
      // do the normal thing
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    }
  });

  // Tag pages:
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  pages.edges.forEach(edge => {
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
    console.log('slugL', value);
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
