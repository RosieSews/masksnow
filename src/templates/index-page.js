import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';
import InfographicPage from '../pages/infographic-page';
import { bpMaxMD } from '../lib/breakpoints';
import { CenteredSection } from '../components/StyledElements/Sections';
import { BigButton } from '../components/StyledElements/BigButton';
import testIds from '../../shared/testIds';

const HeroQuestion = styled.div`
  color: rgb(14, 61, 119);
  font-size: 2.5em;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  text-align: right;
  padding: 4px;
  min-width: 100px;
  margin: 0 0 1em;
  ${bpMaxMD} {
    display: none;
  }
`;

const { landing } = testIds;

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <CenteredSection maxWidth={'800px'}>
        <HeroQuestion>I want to...</HeroQuestion>
        <BigButton
          to="/volunteer"
          data-testid={landing.sections.hero.volunteer}
        >
          Volunteer
        </BigButton>
        <BigButton
          to={'/request-supplies'}
          data-testid={landing.sections.hero.requestSupplies}
        >
          Get Masks
        </BigButton>
      </CenteredSection>
      <div className="container">
        <div className="columns main-page-columns">
          <div className="column is-10 is-offset-1">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '1em 0',
              }}
            >
              <InfographicPage />
            </div>
            <div className="section">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const aboutPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
