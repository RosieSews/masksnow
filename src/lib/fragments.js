import { graphql } from 'gatsby';

export const bannerImage = graphql`
  fragment bannerImage150 on File {
    childImageSharp {
      fluid(maxWidth: 300, traceSVG: { color: "#3273dc" }, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }
  fragment bannerImage200 on File {
    childImageSharp {
      fluid(maxWidth: 200, traceSVG: { color: "#3273dc" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }
  fragment bannerImage720 on File {
    childImageSharp {
      fluid(maxWidth: 720, traceSVG: { color: "#3273dc" }, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
        presentationWidth
      }
    }
  }
`;
