import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'gatsby';

export const NavLink = styled(Link)`
  max-height: 200px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5em;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5%;
  //margin: auto 0;
  text-align: center;
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.white};
  }
  &:active {
    color: ${({ theme }) => theme.colors.discord};
    background: ${({ theme }) => theme.colors.white};
  }
  &.active {
    color: ${({ theme }) => theme.colors.discord};
  }
`;

export const NavCTA = styled(Link)`
  max-height: 200px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5em;
  color: #fff;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  border-radius: 5%;
  //margin: auto 0;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 2px solid transparent;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }
`;
