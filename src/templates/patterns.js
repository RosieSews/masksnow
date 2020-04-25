import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { DownloadIcon, TextLink } from '../components/ListCard';

const PatternTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

export const PatternSection = styled.section`
  max-width: 900px;
  color: #16356f !important;
  margin: auto;
`;
export const PatternsTemplate = ({
  title,
  content,
  contentComponent,
  patternFile,
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
              {patternFile && (
                <DownloadIcon
                  image={patternArt.childImageSharp.fluid}
                  file={patternFile.publicURL}
                >
                  {`${title} Pattern`}
                </DownloadIcon>
              )}
              <PatternTitle>
                {!hideFromFront && 'The'} {` ${title}`}
              </PatternTitle>
              {patternFile && (
                <TextLink href={patternFile.publicURL}>
                  {`DOWNLOAD ${title} PATTERN`}{' '}
                  {updatedDate && `(updated:${updatedDate})`}
                </TextLink>
              )}
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

const Patterns = ({ data, location }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = post;
  const image = frontmatter.featuredimage
    ? frontmatter.featuredimage.childImageSharp.resize
    : null;

  return (
    <Layout
      description={post.frontmatter.description}
      title={frontmatter.title}
      pathname={location.pathname}
      metaImage={image}
    >
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
        featuredimage: patternArt {
          ...featureImage1200
        }
      }
    }
  }
`;
