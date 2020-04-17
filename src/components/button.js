import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { PropStyles } from '../styles/helpers';

/*
 ** Variations of Buttons Based on props.variant
 */
const ButtonVariants = PropStyles('variant', ({ colors }) => {
  return {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      '&:hover, &:focus, &:active': {
        backgroundColor: darken(0.05, colors.primary),
      },
    },
    secondary: {
      color: colors.white,
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
      '&:hover, &:focus, &:active': {
        backgroundColor: darken(0.05, colors.secondary),
      },
    },
    tertiary: {
      color: colors.white,
      backgroundColor: colors.tertiary,
      borderColor: colors.tertiary,
      '&:hover, &:focus, &:active': {
        backgroundColor: darken(0.05, colors.tertiary),
      },
    },
    grey: {
      color: colors.mediumGrey,
      backgroundColor: colors.whiteGrey,
      borderColor: colors.lightGrey,
      '&:hover, &:focus, &:active': {
        backgroundColor: colors.lightGrey,
        color: colors.text,
      },
    },
    discord: {
      color: colors.white,
      backgroundColor: colors.discord,
      borderColor: colors.lightGrey,
      '&:hover, &:focus, &:active': {
        backgroundColor: darken(0.05, colors.discord),
      },
    },
  };
});

const Button = styled.button`
  font-family: ${props => props.theme.fonts.header};
  font-weight: 400;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  height: 36px;
  border-radius: 0.25rem;
  padding: 0 1.5rem;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  text-decoration: none;
  ${ButtonVariants};
  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active {
    outline: none;
  }

  svg {
    height: 0.95rem;
    width: auto;
    stroke-width: 1px;
    margin-left: 0.5rem;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
};

export default Button;
