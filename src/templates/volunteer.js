import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const VolunteerTemplate = ({ title, content, contentComponent }) => {
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
              <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrtdAwqaNjZwgVbm?backgroundColor=green" width="100%" height="1096"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

VolunteerTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Volunteer = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VolunteerTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

Volunteer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Volunteer

export const aboutPageQuery = graphql`
  query Volunteer($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
