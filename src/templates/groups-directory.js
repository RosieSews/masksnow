import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const GroupsDirectoryTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GroupsDirectoryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

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

const GroupsDirectory = ({ data: { allAirtable } }) => {
  const { nodes } = allAirtable;

  console.log("data", allAirtable);

  return (
    <Layout>
      <GroupsDirectoryTemplate
        // contentComponent={HTMLContent}
        title={"Facebook Groups"}
        content={<RenderGroups groups={nodes} />}
      />
    </Layout>
  );
};

GroupsDirectory.propTypes = {
  data: PropTypes.object.isRequired
};

export default GroupsDirectory;

export const GroupDirectoryQuery = graphql`
  query GroupsAirtableQuery {
    allAirtable(filter: { table: { eq: "Groups" } }) {
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
