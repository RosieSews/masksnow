import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';
import InfographicPage from '../pages/infographic-page';
import { bpMaxMD } from '../lib/breakpoints';

const HeroQuestion = styled.div`
  color: rgb(14, 61, 119);
  font-size: 2.5em;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  text-align: right;
  padding: 4px;
  min-width: 340px;
  margin: 0 0 1em;
  ${bpMaxMD} {
    display: none;
  }
`;

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="centered">
        <HeroQuestion>I want to...</HeroQuestion>
        <div className="big-button">
          <Link to="/request-supplies">Volunteer</Link>
        </div>
        <div className="big-button">
          <Link to={'/request-supplies'}>Get Masks</Link>
        </div>
      </div>
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
