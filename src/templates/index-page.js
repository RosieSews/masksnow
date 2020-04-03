import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import infographicVolunteer from '../img/infographic-volunteer.png';
import infographicMask from '../img/infographic-mask.png';
import infographicSignUpBanner from '../img/infographic-sign-up-banner.png';
import infographicScissors from '../img/infographic-scissors.png';
import infographicPattern from '../img/infographic-pattern.png';
import infographicQuestion from '../img/infographic-question.png';

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="centered">
        <div className="big-button">
          Need Masks? <Link to="/request-supplies">Submit Request</Link>
        </div>
      </div>
      <div className="container">
        <div className="columns main-page-columns">
          <div className="column is-4 is-offset-1">
            <div className="section">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PageContent className="content" content={content} />
            </div>
          </div>
          <div className="column is-7">
            <div className="section">
              <div className="call-to-action">
                <img alt="Rosie volunteers" src={infographicVolunteer}></img>
                <div>
                  Volunteer
                  <ul>
                    <li>
                      <Link to="/volunteer">> I WANT TO SEW MASKS</Link>
                    </li>
                    <li>
                      <a href="https://rosiesews.freshdesk.com/support/solutions/articles/61000260572-i-don-t-know-how-to-sew-can-i-still-help-">
                        > I CAN'T SEW, BUT I WANT TO HELP
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ribbon">
                <h1>After You Sign Up</h1>
              </div>

              <div className="call-to-action">
                <img alt="Pattern" src={infographicPattern}></img>
                <div>
                  Get the Pattern
                  <ul>
                    <li>
                      <a href="/docs/CFCMask_3_27.pdf">> 3-LAYER FACE MASK</a>
                    </li>
                    <li>
                      <a href="/docs/CFC_Pocket_Mask_3_28.pdf">
                        > POCKET FACE MASK
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <br />

              <div className="call-to-action">
                <img alt="Scissors" src={infographicScissors}></img>
                <div>
                  Make Masks
                  <ul>
                    <li>
                      <a href="https://www.youtube.com/watch?v=J0HnaWUIyzg">
                        > WATCH 3-LAYER MASK VIDEO
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=6NI8W5N06xo">
                        > WATCH POCKET MASK VIDEO
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <br />

              <div className="call-to-action">
                <img alt="Masks" src={infographicMask}></img>
                <div>
                  Donate Masks
                  <Link to="/groups-directory">
                    <ul>
                      <li>
                        YOUR STATE LEAD WILL EMAIL YOU WITH DIRECTIONS ON HOW &
                        WHERE
                      </li>
                    </ul>
                  </Link>
                </div>
              </div>

              <br />

              <div className="call-to-action">
                <img alt="Questions?" src={infographicQuestion}></img>
                <div>
                  Get Help
                  <a href="https://rosiesews.freshdesk.com/support/home">
                    <ul>
                      <li>
                        FIND ANSWERS TO ALL YOUR QUESTIONS AT OUR KNOWLEDGE BASE
                      </li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const aboutPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
