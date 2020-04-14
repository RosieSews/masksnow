import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { DownloadIcon, TextLink } from '../components/ListCard';

const ResourceTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

export const ResourceSection = styled.section`
  max-width: 900px;
  color: #16356f !important;
  margin: auto;
`;
export const ResourcesTemplate = ({
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
            <ResourceSection>
              {patternFile && (
                <DownloadIcon
                  image={patternArt.childImageSharp.fluid}
                  file={patternFile.publicURL}
                >
                  {`${title} Resource`}
                </DownloadIcon>
              )}
              <ResourceTitle>
                {!hideFromFront && 'The'} {` ${title}`}
              </ResourceTitle>
              {patternFile && (
                <TextLink href={patternFile.publicURL}>
                  {`DOWNLOAD ${title} PATTERN`}{' '}
                  {updatedDate && `(updated:${updatedDate})`}
                </TextLink>
              )}
              <PageContent className="content" content={content} />
            </ResourceSection>
          </div>
        </div>
      </div>
    </section>
  );
};

ResourcesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Resources = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResourcesTemplate
        contentComponent={HTMLContent}
        {...post.frontmatter}
        content={post.html}
      />
    </Layout>
  );
};

Resources.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Resources;

export const aboutPageQuery = graphql`
  query Resources($id: String!) {
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
