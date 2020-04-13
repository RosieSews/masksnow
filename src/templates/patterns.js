import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { TextLink } from '../components/ListCard';

const PatternTitle = styled.h1`
  //color: #16356f;
  font-size: 3em;
  font-weight: bold;
`;

const PatternSection = styled.section`
  color: #16356f !important;
  h1 h2 h3 h4 h5 h6 {
    color: red !important;
  }
`;
// import PATTERN from "../img/MasksNOW-Mask-Pattern-MasksNOW-Mask-Pattern-Packet-by-Created-for-Crisis.png";
export const PatternsTemplate = ({
  title,
  content,
  contentComponent,
  patternFile,
  alternateTitle,
  patternArt,
  hideFromFront,
  updatedDate,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PatternSection>
              <PatternTitle>
                {!hideFromFront && 'The'} {` ${title}`}
              </PatternTitle>
              <TextLink href={patternFile.publicURL}>
                {`DOWNLOAD ${title} PATTERN`}{' '}
                {updatedDate && `(updated:${updatedDate})`}
              </TextLink>
              <PageContent className="content" content={content} />
            </PatternSection>
          </div>
        </div>
      </div>
    </section>
  );
};

PatternsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Patterns = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PatternsTemplate
        contentComponent={HTMLContent}
        {...post.frontmatter}
        content={post.html}
      />
    </Layout>
  );
};

Patterns.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Patterns;

export const aboutPageQuery = graphql`
  query Patterns($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        meetsGuidelines
        forDonations
        noSewingMachine
        hideFromFront
        updatedDate(formatString: "MMMM DD, YYYY")
        patternFile {
          publicURL
        }
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
`;
