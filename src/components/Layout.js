import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import SEO from './SEO';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const TemplateWrapper = ({ children, ...otherProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO {...otherProps} />
      <Helmet>
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
    </ThemeProvider>
  );
};

export default TemplateWrapper;
