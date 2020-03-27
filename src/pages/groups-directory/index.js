import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Content, { HTMLContent } from '../../components/Content';
import { PageTemplate } from '../../templates/PageTemplate';

const RenderGroups = ({ groups }) => {
  return (
    <ul>
      {groups.map(({ data }) => (
        <li>
          <a href={data.url}>{data.Name}</a>
        </li>
      ))}
    </ul>
  );
};

const GroupsDirectory = ({ data }) => {
  const { nodes } = data.allAirtable;

  return (
    <Layout>
      <PageTemplate
        // contentComponent={HTMLContent}
        title={'Facebook Groups'}
        content={<RenderGroups groups={nodes} />}
      />
    </Layout>
  );
};

GroupsDirectory.propTypes = {
  data: PropTypes.shape({
    allAirtable: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export default GroupsDirectory;

export const GroupsDirectoryPageQuery = graphql`
  query GroupsDirectory {
    allAirtable(filter: { table: { eq: "FB Groups" } }) {
      nodes {
        data {
          Name
          url
        }
        recordId
      }
    }
  }
`;
