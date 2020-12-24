import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  InfoCard,
  InfoCardAnchor,
  InfoCardLink,
  InfoCardRight,
  InfographicBanner,
  StyledLink,
  TextLink,
  WarningText,
  AdditionalInfoText,
} from '../components/ListCard';

import testIds from '../../shared/testIds';
const { landing } = testIds;

const InfographicPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pattern: file(
        relativePath: { eq: "infographic/infographic-pattern-01.png" }
      ) {
        ...bannerImage150
      }
      clippers: file(
        relativePath: { eq: "infographic/infographic-scissors-01.png" }
      ) {
        ...bannerImage150
      }
      mask: file(relativePath: { eq: "infographic/infographic-mask-01.png" }) {
        ...bannerImage150
      }
      volunteer: file(
        relativePath: { eq: "infographic/infographic-volunteer-01.png" }
      ) {
        ...bannerImage150
      }
      question: file(
        relativePath: { eq: "infographic/infographic-question-01.png" }
      ) {
        ...bannerImage150
      }
      patterns: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        filter: {
          frontmatter: {
            templateKey: { eq: "patterns" }
            hideFromFront: { ne: true }
          }
          fields: { slug: { ne: "/" } }
        }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              description
              meetsGuidelines
              forDonations
              noSewingMachine
              patternFile {
                publicURL
              }
              alternateTitle
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              patternArt {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const { patterns } = data;
  return (
    <>
      <InfoCard image={data.volunteer.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Volunteer</h2>
          <InfoCardLink
            to={'/volunteer'}
            data-testid={landing.sections.hero.sewMasks}
          >
            I WANT TO SEW MASKS
          </InfoCardLink>
          <InfoCardAnchor
            href={
              'https://rosiesews.freshdesk.com/support/solutions/articles/61000260572-i-don-t-know-how-to-sew-can-i-still-help-'
            }
            data-testid={landing.sections.hero.help}
          >
            I CAN'T SEW, BUT I WANT TO HELP
          </InfoCardAnchor>
        </InfoCardRight>
      </InfoCard>
      <InfographicBanner>After You Sign Up</InfographicBanner>
      <InfoCard image={data.pattern.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Get The Pattern</h2>
          <AdditionalInfoText hasLeftSpacing>
            (or use any pattern of your choosing)
          </AdditionalInfoText>
          {patterns.edges.map(pattern => {
            return (
              <React.Fragment key={pattern.node.frontmatter.title}>
                <InfoCardAnchor
                  href={pattern.node.frontmatter.patternFile.publicURL}
                  data-testid={
                    landing.sections.afterSignUp.getThePattern[
                      pattern.node.frontmatter.alternateTitle
                    ]
                  }
                >
                  {pattern.node.frontmatter.alternateTitle}
                </InfoCardAnchor>
                {!pattern.node.frontmatter.forDonations && (
                  <WarningText>*PERSONAL USE ONLY</WarningText>
                )}
              </React.Fragment>
            );
          })}
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.clippers.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Make Masks!</h2>
          {patterns.edges.map(pattern => (
            <React.Fragment key={pattern.node.frontmatter.title}>
              <InfoCardLink
                to={`/patterns${pattern.node.fields.slug}`}
                data-testid={
                  landing.sections.afterSignUp.makeMasks[
                    pattern.node.frontmatter.alternateTitle
                  ]
                }
              >
                {`WATCH ${pattern.node.frontmatter.alternateTitle} VIDEO`}
              </InfoCardLink>

              {!pattern.node.frontmatter.forDonations && (
                <WarningText>*PERSONAL USE ONLY</WarningText>
              )}
            </React.Fragment>
          ))}
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.mask.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Donate Masks</h2>
          <StyledLink
            to={'/groups-directory'}
            data-testid={landing.sections.afterSignUp.donateMasks.stateLeads}
          >
            {`YOUR STATE LEAD WILL EMAIL YOU WITH`}{' '}
            {`DIRECTIONS ABOUT HOW & WHERE`}
          </StyledLink>
          <TextLink
            data-testid={
              landing.sections.afterSignUp.donateMasks.everyMaskDonated
            }
            href={
              'https://rosiesews.freshdesk.com/support/solutions/articles/61000268414-can-i-use-a-different-pattern-than-what-you-provide-'
            }
          >
            {`EVERY MASK MADE WILL BE DONATED`}
            <br />
            {`NO MATTER WHAT PATTERN YOU USE`}
          </TextLink>
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.question.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Get Help</h2>
          <TextLink
            href={'https://rosiesews.freshdesk.com/support/home'}
            data-testid={landing.sections.afterSignUp.getHelp.support}
          >
            {`FIND ANSWERS TO ALL YOUR QUESTIONS AT OUR KNOWLEDGE BASE`}
          </TextLink>
        </InfoCardRight>
      </InfoCard>
    </>
  );
};

export default InfographicPage;
