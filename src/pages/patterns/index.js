import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { PageTemplate } from '../../templates/PageTemplate';

const EmbededAirtable = () => (
  <iframe
    className="airtable-embed airtable-dynamic-height"
    src="https://airtable.com/embed/shr5nBY7UkLhrqj4R?backgroundColor=yellow"
    width="100%"
    height="1867"
    className="request-supplies__StyledFrame-ybe9hf-0 diKYNp"
  ></iframe>
);
const Patterns = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        EmbededAirtable={EmbededAirtable}
      />
    </Layout>
  );
};

Patterns.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Patterns;

export const PatternsQueryPage = graphql`
  query Patterns($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
