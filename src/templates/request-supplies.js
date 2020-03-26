import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const RequestSuppliesTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

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
              <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr5nBY7UkLhrqj4R?backgroundColor=yellow" width="100%" height="1867" className="request-supplies__StyledFrame-ybe9hf-0 diKYNp"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

RequestSuppliesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const RequestSupplies = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RequestSuppliesTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

RequestSupplies.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RequestSupplies

export const aboutPageQuery = graphql`
  query RequestSupplies($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
