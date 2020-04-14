import React from 'react';
import styled from 'styled-components';
import { bpMaxMD } from '../../lib/breakpoints';

export const PatternSection = styled.section`
  max-width: 900px;
  color: #16356f !important;
  margin: auto;
`;

export const CenteredSection = styled.section`
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  ${bpMaxMD} {
    justify-content: center;
  }
`;
