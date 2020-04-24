import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Donateform from '../components/Donation/DonateForm';
import { HTMLContent } from '../components/Content';
import { AuthUserContext } from '../components/Session';
import { StyledSection } from '../components/StyledElements/Sections';

const DonatePage = ({ data, location }) => {
  const { pageContent } = data;
  const { frontmatter } = pageContent;
  const image = frontmatter.featuredimage
    ? frontmatter.featuredimage.childImageSharp.resize
    : null;

  return (
    <Layout
      article
      title={frontmatter.title}
      description={frontmatter.description}
      metaImage={image}
      pathname={location.pathname}
    >
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <StyledSection>
                <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {pageContent.frontmatter.subTitle}
                </h1>
                <h1 className="title is-size-5 is-bold-light">
                  {pageContent.frontmatter.description}
                </h1>
                <HTMLContent className="content" content={pageContent.html} />
                <AuthUserContext.Consumer>
                  {authUser => <Donateform authUser={authUser} />}
                </AuthUserContext.Consumer>
              </StyledSection>
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
        subTitle
        description
        featuredimage {
          ...featureImage1200
        }
      }
    }
  }
`;
