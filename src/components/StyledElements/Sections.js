import styled from 'styled-components';
import { bpMaxMD } from '../../lib/breakpoints';

export const StyledSection = styled.section`
  max-width: 900px;
  color: #16356f !important;
  margin: auto;
`;

export const CenteredSection = styled.section`
  max-width: ${({ maxWidth }) => maxWidth || '900px'};
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  ${bpMaxMD} {
    justify-content: center;
  }
`;
