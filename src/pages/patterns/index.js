import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Content, { HTMLContent } from '../../components/Content';
import {
  InfoBannerWrapper,
  InfoCard,
  InfoCardAnchor,
  InfoCardLink,
  InfoCardRight,
  InfoCardWrapper,
  InfographicBanner,
  StyledLink,
  TextLink,
  WarningText,
} from '../../components/ListCard';

const Pattern = ({
  title,
  meetsGuidelines,
  forDonations,
  noSewingMachine,
  description,
  link,
  patternArt,
}) => {
  return (
    <InfoCard image={patternArt.childImageSharp.fluid}>
      <InfoCardRight>
        <h2>{`The ${title}`}</h2>
        {meetsGuidelines && <h3>MEETS CDC GUIDELINES</h3>}
        {noSewingMachine && <h3>NO SEWING MACHINE REQUIRED</h3>}
        {!forDonations && <h3>NOT FOR DONATION - HOME USE ONLY</h3>}
        <p>{description}</p>
        <InfoCardLink to={link}>GET THE PATTERN</InfoCardLink>
      </InfoCardRight>
    </InfoCard>
  );
};
// <InfographicBanner>After You Sign Up</InfographicBanner>;
const Patterns = ({ patterns }) => {
  return patterns.edges.map((pattern, index) => {
    return (
      <>
        <Pattern
          key={pattern.node.fields.slug}
          {...pattern.node.frontmatter}
          link={`/patterns${pattern.node.fields.slug}`}
        />
        {index === 0 && (
          <InfographicBanner>If you can't get interfacing</InfographicBanner>
        )}
      </>
    );
  });
};

const PatternsPage = ({ title, data }) => {
  const PageContent = HTMLContent;
  const { pageContent, patterns } = data;
  console.log('patterns:', patterns);

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
              <Patterns patterns={patterns} />
              {/*<PageContent className="content" content={pageContent.html} />*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

PatternsPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

// const Patterns = ({ data }) => {
//   const { markdownRemark: post } = data;
//
//   return (
//     <Layout>
//       <PatternsTemplate
//         contentComponent={HTMLContent}
//         title={post.frontmatter.title}
//         content={post.html}
//       />
//     </Layout>
//   );
// };
//
// Patterns.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default PatternsPage;

export const patternPageQuery = graphql`
  query PatternsQuery {
    patterns: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: {
        frontmatter: { templateKey: { eq: "patterns" } }
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
            meetsGuidelines
            forDonations
            noSewingMachine
            date(formatString: "MMMM DD, YYYY")
            featuredpost
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
      frontmatter: { templateKey: { eq: "patterns" } }
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
