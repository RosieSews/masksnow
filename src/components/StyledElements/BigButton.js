import styled from 'styled-components';
import { Link } from 'gatsby';

export const BigButton = styled(Link)`
  color: rgb(14, 61, 119);
  font-size: 2.5em;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 0 0 1em 0.5em;
  min-width: 250px;
  padding: 8px 32px;
  white-space: nowrap;

  background-color: rgb(234, 204, 98);
  &:hover {
    color: red;
  }

  @media only screen and (max-width: 400px) {
    min-width: 100%;
    padding: 0;
    margin: 0.25em 0;
  }
`;
