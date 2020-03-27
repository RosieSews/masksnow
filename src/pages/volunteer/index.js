import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Content, { HTMLContent } from '../../components/Content';
import { PageTemplate } from '../../templates/PageTemplate';

const EmbededAirtable = () => (
  <iframe
    className="airtable-embed airtable-dynamic-height"
    src="https://airtable.com/embed/shrtdAwqaNjZwgVbm?backgroundColor=green"
    width="100%"
    height="1096"
  ></iframe>
);

const Volunteer = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        EmbededAirtable={EmbededAirtable}
      />
    </Layout>
  );
};

Volunteer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Volunteer;

export const aboutPageQuery = graphql`
  query Volunteer($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
