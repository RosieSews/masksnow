import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import SEO from './SEO';
import PropTypes from 'prop-types';

const TemplateWrapper = ({ children, postNode }) => {
  const { title, description, image, siteUrl } = useSiteMetadata();
  return (
    <div>
      <SEO postNode={postNode} article={postNode ? true : false} />
      <Helmet>
        {/* <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}/${image}`} />
        <meta name="twitter:description" content={description} /> */}

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="16x16"
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  postNode: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    featuredimage: PropTypes.shape({
      publicURL: PropTypes.string
    }),
    keywords: PropTypes.string

  })
}
export default TemplateWrapper;
