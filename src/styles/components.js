import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const StyledHeader = styled.header.attrs(props => ({
  color: props.inverted ? props.theme.colors.white : props.theme.colors.text,
}))`
  color: ${props => props.color};
`;

const StyledText = styled.p.attrs(props => ({
  color: props.inverted ? props.theme.colors.white : props.theme.colors.text,
}))`
  color: ${props => props.color};
`;

const ContentContainer = styled.div`
  max-width: ${props => props.theme.breakpoints.xl};
  padding: 0 1rem;
  width: 100%;
  margin: auto;
`;

const ArticleContainer = styled.div`
  max-width: ${props => props.theme.breakpoints.md};
  padding: 0 1rem;
  width: 100%;
  margin: auto;
`;

const ActionGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  .action + .action {
    margin: 1rem 0 0 0;
  }

  ${up('xs')} {
    flex-direction: row;
    .action + .action {
      margin: 0 0 0 1rem;
    }
  }
`;

const Grid = styled.div.attrs(props => ({
  sm: props.sm || 2,
  md: props.md || 3,
  lg: props.lg || 4,
}))`
  display: grid;
  ${up('sm')} {
    grid-template-columns: repeat(${props => props.sm}, 1fr);
  }
  ${up('md')} {
    grid-template-columns: repeat(${props => props.md}, 1fr);
  }
  ${up('lg')} {
    grid-template-columns: repeat(${props => props.lg}, 1fr);
  }
`;

export {
  StyledHeader,
  StyledText,
  ContentContainer,
  ArticleContainer,
  ActionGroup,
  Grid,
};
