import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { PatternSection } from './patterns';

export const PageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PatternSection>
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PageContent className="content" content={content} />
            </PatternSection>
          </div>
        </div>
      </div>
    </section>
  );
};

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Page = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
      article
      title={post.frontmatter.title}
      pathname={location.pathname}
      description={post.frontmatter.description || post.excerpt}
    >
      <PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Page;

export const infoPageQuery = graphql`
  query InfoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        description
      }
    }
  }
`;
