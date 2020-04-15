import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';
import {
  InfoCard,
  InfoCardLink,
  InfoCardRight,
  InfographicBanner,
} from '../../components/ListCard';
import PageContent, { HTMLContent } from '../../components/Content';

const Resource = ({ title, description, link, patternArt }) => {
  return (
    <InfoCard image={patternArt.childImageSharp.fluid} link={link}>
      <InfoCardRight>
        <Link to={link}>
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
        <InfoCardLink to={link}>GET THE RESOURCE</InfoCardLink>
      </InfoCardRight>
    </InfoCard>
  );
};
const Resources = ({ resources }) => {
  return resources.edges.map((resource, index) => {
    return (
      <>
        <Resource
          key={resource.node.fields.slug}
          {...resource.node.frontmatter}
          link={`/resources${resource.node.fields.slug}`}
        />
      </>
    );
  });
};

const ResourcesPage = ({ title, data }) => {
  const { resources, pageContent } = data;

  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {/*<div className="section">*/}
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <HTMLContent className="content" content={pageContent.html} />
              <InfographicBanner>Resources</InfographicBanner>
              <Resources resources={resources} />
              {/*</div>*/}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

ResourcesPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

// const Resources = ({ data }) => {
//   const { markdownRemark: post } = data;
//
//   return (
//     <Layout>
//       <ResourcesTemplate
//         contentComponent={HTMLContent}
//         title={post.frontmatter.title}
//         content={post.html}
//       />
//     </Layout>
//   );
// };
//
// Resources.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default ResourcesPage;

export const patternPageQuery = graphql`
  query ResourcesQuery {
    resources: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: {
        frontmatter: { templateKey: { eq: "resources" } }
        fields: { slug: { ne: "/" } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
            patternArt {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
    pageContent: markdownRemark(
      frontmatter: { templateKey: { eq: "resources" } }
      fields: { slug: { eq: "/" } }
    ) {
      html
      frontmatter {
        title
        templateKey
        path
        date(formatString: "MMMM DD, YYYY")
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
