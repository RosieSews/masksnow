import React from 'react';
import { kebabCase } from 'lodash';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { bpMaxSM } from '../lib/breakpoints';
import Img from 'gatsby-image';

const InfoCardWrapper = styled.div`
  color: #16356f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  max-width: 940px;
  flex-wrap: wrap;
  margin: 0.5em auto;
`;

const InfoCardRight = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    max-width: 400px;
    position: relative;
    h2 {
      // font-size should be 3em to match the CTA buttons but it's wrong for some reason
      font-size: 2.5em;

      font-weight: bold;
      color: rgb(13, 50, 95);
    }
  }
`;

const InfoCardLink = styled(Link)`
  margin: 0.5em 0 0 0.5em;
  font-size: 1.5em;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
  &::before {
    content: '\\25ba';
    color: #b03619;
    text-decoration: none;
    margin: 0 10px 0 0;
  }
`;

const InfoCardAnchor = styled.a`
  margin: 0.5em 0 0 0.5em;
  font-size: 1.5em;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
  &::before {
    content: '\\25ba';
    color: #b03619;
    text-decoration: unset;
    margin: 0 10px 0 0;
  }
`;

const TextLink = styled.a`
  margin: 0.5em 0 0 0.5em;
  font-size: 1.5em;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
`;

const InfoCard = ({ image, children }) => {
  return (
    <InfoCardWrapper>
      <Img
        fluid={image}
        alt="#MasksNOW logo"
        style={{
          objectFit: 'contain',
          margin: '0 auto',
          width: image.presentationWidth,
        }}
      />
      {children}
    </InfoCardWrapper>
  );
};

const InfoBannerWrapper = styled.div`
  // font-size should be 3em to match the CTA buttons but it's wrong for some reason
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  text-align: center;
  color: whitesmoke;
  max-width: 940px;
  width: 100%;
  background-color: #b03619;
  clip-path: polygon(100% 0, 97% 50%, 100% 100%, 0% 100%, 3% 50%, 0% 0%);
  margin: 32px auto;
  padding: 0 0.5em;
  ${bpMaxSM} {
    font-size: 1.75em;
  }
`;
const InfographicBanner = ({ children }) => {
  return <InfoBannerWrapper>{children}</InfoBannerWrapper>;
};

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
    }
  `);
  return (
    <>
      <InfoCard image={data.volunteer.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Volunteer</h2>
          <InfoCardLink to={'/volunteer'}>I WANT TO SEW MASKS</InfoCardLink>
          <InfoCardLink
            href={
              'https://rosiesews.freshdesk.com/support/solutions/articles/61000260572-i-don-t-know-how-to-sew-can-i-still-help-'
            }
          >
            I CAN'T SEW, BUT I WANT TO HELP
          </InfoCardLink>
          <p>FACILITIES IN NEED OF MASKS: Fill out a Request Form</p>
        </InfoCardRight>
      </InfoCard>
      <InfographicBanner>After You Sign Up</InfographicBanner>
      <InfoCard image={data.pattern.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Get The Pattern</h2>
          <InfoCardAnchor href={'/docs/CFCMask_3_27.pdf'}>
            3-LAYER FACE MASK
          </InfoCardAnchor>
          <InfoCardAnchor href={'/docs/CFC_Pocket_Mask_3_28.pdf'}>
            POCKET FACE MASK
          </InfoCardAnchor>
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.clippers.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Make Masks!</h2>
          <InfoCardLink to={'/patterns/3-layer-pattern'}>
            WATCH 3-LAYER MASK VIDEO
          </InfoCardLink>
          <InfoCardLink to={'/patterns/pocket-pattern'}>
            WATCH POCKET MASK VIDEO
          </InfoCardLink>
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.mask.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Donate Masks</h2>
          <TextLink to={'groups-directory'}>
            {`YOUR STATE LEAD WILL EMAIL YOU WITH`}
            <br />
            {`DIRECTIONS ABOUT HOW & WHERE`}
          </TextLink>
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.question.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Get Help</h2>
          <TextLink href={'https://rosiesews.freshdesk.com/support/home'}>
            {`FIND ANSWERS TO ALL YOUR QUESTIONS AT OUR KNOWLEDGE BASE`}
          </TextLink>
        </InfoCardRight>
      </InfoCard>
    </>
  );
};

export default InfographicPage;
