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
  max-width: 600px;
  flex-wrap: wrap;
  margin: 0.5em auto;
`;

const InfoCardRight = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    max-width: 60%;
    position: relative;
    h2 {
      // font-size should be 3em to match the CTA buttons but it's wrong for some reason
      font-size: 2.5em;

      font-weight: bold;
      color: rgb(13, 50, 95);
      ${bpMaxSM} {
        font-size: 2em;
      }
    }
  }
`;

const InfoCardLink = styled(Link)`
  margin: 0.5em 0 0 0.5em;
  font-size: 1em;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
  &::before {
    content: '\\25ba';
    color: #d64000;
    text-decoration: none;
    margin: 0 10px 0 0;
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
  max-width: 500px;
  width: 100%;
  background-color: #d64000;
  clip-path: polygon(100% 0, 97% 50%, 100% 100%, 0% 100%, 3% 50%, 0% 0%);
  margin: 32px auto;
  padding: 0 0.5em;
  ${bpMaxSM} {
    font-size: 1.75em;
  }
`;

const InfoGraphic = styled.div`
  margin: auto;
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
          <InfoCardLink to={'/patterns/3-layer-pattern'}>
            3-LAYER FACE MASK
          </InfoCardLink>
          <InfoCardLink to={'/patterns/pocket-pattern'}>
            POCKET FACE MASK
          </InfoCardLink>
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
          <p>
            <Link to={'groups-directory'}>
              YOUR STATE LEAD WILL EMAIL YOU WITH DIRECTIONS ABOUT HOW & WHERE
            </Link>
          </p>
        </InfoCardRight>
      </InfoCard>
    </>
  );
};

export default InfographicPage;
