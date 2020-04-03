import React from 'react';
import Layout from '../../components/Layout';
import InfographicPage from '../infographic-page';

export const InfographicPageLayout = () => {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <InfographicPage />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfographicPageLayout;
