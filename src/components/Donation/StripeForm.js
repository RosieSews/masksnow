import React from 'react';
import styled from 'styled-components';
import { CardElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const StyledStripeForm = styled.div`
  .StripeElement {
    height: 40px;
    padding: 0.6rem 0.75rem;
    width: 100%;
    color: #32325d;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 4px;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;

    &--focus {
      box-shadow: 0 1px 3px 0 #cfd7df;
    }
    &--invalid {
      border-color: ${props => props.theme.colors.primary};
    }
    &--webkit-autofill {
      background-color: #fefde5 !important;
    }
  }
`;

const StripeForm = () => (
  <StyledStripeForm>
    <CardElement options={CARD_ELEMENT_OPTIONS} />
  </StyledStripeForm>
);

export default StripeForm;
