import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  width: 50%;
  min-height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 0;
  margin: 0 auto;

  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  color: #1c376e;
`;

const Subtitle = styled.p`
  font-size: 36px;
  color: #1c376e;
`;

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Title>
        4
        <span
          role="img"
          aria-label="A yellow face with closed eyes wearing a white surgical mask, as used by health workers in hospitals. "
        >
          😷
        </span>
        4
      </Title>
      <Subtitle>
        Sorry, we couldn't find that page. If you think this is a problem,
        please <Link to="/contact">contact us.</Link>
      </Subtitle>
    </Container>
  </Layout>
);

export default NotFoundPage;
