import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
// import PATTERN from "../img/MasksNOW-Mask-Pattern-MasksNOW-Mask-Pattern-Packet-by-Created-for-Crisis.png";
export const PatternsTemplate = ({ title, content, contentComponent }) => {
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
              <a href={"/CFCMask.pdf"} download>
                Download the Pattern Packet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PatternsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const Patterns = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PatternsTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Patterns.propTypes = {
  data: PropTypes.object.isRequired
};

export default Patterns;

export const aboutPageQuery = graphql`
  query Patterns($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
