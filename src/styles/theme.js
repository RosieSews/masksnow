import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import typography from './typography';

require('typeface-oswald');
require('typeface-assistant');

const theme = {
  colors: {
    black: '#2b2523',
    white: '#fff',
    primary: '#16356f',
    secondary: '#3273dc',
    tertiary: '#eacc62',
    discord: '#b03619',
    text: '#161617',
    darkGrey: '#8D8D8F',
    mediumGrey: rgba(16, 16, 17, 0.5),
    lightGrey: rgba(16, 16, 17, 0.1),
    whiteGrey: rgba(16, 16, 17, 0.02),
  },
  fonts: {
    header: "'Oswald', sans-serif",
    body: "'Assistant', sans-serif",
    accent: "'Oswald', sans-serif",
  },
  layout: {
    headerHeight: '56px',
  },
  breakpoints: {
    xs: '321px', // iPhone 5SE
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1040px',
    sl: '1400px', // Super Large, Additional Breakpoint
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    ${typography.toString()};
    margin: 0;
    position: relative;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.body};
    *{
      box-sizing: border-box;
    }
  }
`;
export { theme, GlobalStyle };
