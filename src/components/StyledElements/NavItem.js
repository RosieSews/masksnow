import styled from 'styled-components';
import { Link } from 'gatsby';

import styleVars from '../styleVars';

export const NavLink = styled(Link)`
  max-height: 200px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5em;
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: all 200ms ease-in-out;
  width: 100%;
  &:hover {
    color: ${styleVars.navbarBackground};
    background: ${styleVars.primaryInvert};
  }
  &:active {
    color: ${styleVars.primary};
    background: ${styleVars.primaryInvert};
  }
  &.active {
    color: ${styleVars.primary};
  }
`;
