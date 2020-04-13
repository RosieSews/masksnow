import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bpMaxMD } from '../../lib/breakpoints';

export const NavLink = styled(Link)`
  max-height: 200px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5em;
  color: #fff;
  padding: 0.5rem 1rem;
  //margin: auto 0;
  text-align: center;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #16356f;
    background: #fff;
  }
  &:active {
    color: #b03619;
    background: #fff;
  }
  &.active {
    color: #b03619;
    background: #fff;
  }
`;
