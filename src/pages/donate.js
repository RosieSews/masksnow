import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Donateform from '../components/Donation/DonateForm';
import { HTMLContent } from '../components/Content';
import { AuthUserContext } from '../components/Session';

const DonatePage = ({ data }) => {
  const { pageContent } = data;

  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {pageContent.frontmatter.title}
              </h1>
              <AuthUserContext.Consumer>
                {authUser => <Donateform authUser={authUser} />}
              </AuthUserContext.Consumer>
              <HTMLContent className="content" content={pageContent.html} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;

export const donatePageQuery = graphql`
  query DonateQuery {
    pageContent: markdownRemark(
      frontmatter: { templateKey: { eq: "donate" } }
    ) {
      html
      frontmatter {
        title
        templateKey
        path
        date(formatString: "MMMM DD, YYYY")
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
