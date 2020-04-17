import styled from 'styled-components';
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
