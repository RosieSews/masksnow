import React from 'react';
import styled from 'styled-components';
import Cleave from 'cleave.js/react';
import Button from '../button';

const Donations = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const CustomAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  transition: box-shadow 150ms ease;
  border-radius: 4px;
  overflow: hidden;
  flex: 1;
  margin: 0 1rem 1rem 0;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0.75rem 1rem;
    background-color: #aab7c4;
    font-family: ${props => props.theme.fonts.body};
    font-weight: 500;
  }
  input {
    height: 40px;
    padding: 0.6rem 0.75rem;
    border: 1px solid transparent;
    width: 100%;
    color: #32325d;
    background-color: white;
    font-size: 1.25em;
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

const DonationButton = styled(Button)`
  margin: 0 1rem 1rem 0;
  height: 40px;
  color: #aab7c4;
  font-family: ${props => props.theme.fonts.header};
  font-weight: 700;
  background-color: transparent;
  border: 2px solid #aab7c4;
  font-size: 1.1rem;
  &:hover {
    border: 2px solid #aab7c4;
    background-color: ${props => props.theme.colors.whiteGrey};
    color: ${props => props.theme.colors.text};
  }
  &.active,
  &:focus,
  &:active {
    border: 2px solid #aab7c4;
    background-color: #aab7c4;
    color: ${props => props.theme.colors.text};
  }
`;

const donationAmounts = [
  {
    text: '$10.00',
    value: 1000,
  },
  {
    text: '$25.00',
    value: 2500,
  },
  {
    text: '$50.00',
    value: 5000,
  },
  {
    text: '$100.00',
    value: 10000,
  },
];

const AmountSelection = ({ amount, showCustomAmount, dispatch }) => (
  <Donations>
    {donationAmounts.map(({ text, value }, i) => (
      <DonationButton
        key={i}
        className={`${
          amount.value === value && !showCustomAmount ? 'active' : 'inactive'
        }`}
        active={amount.value === value && !showCustomAmount}
        onClick={e =>
          dispatch({
            type: 'changeAmount',
            payload: {
              amount: {
                text,
                value,
                custom: false,
              },
              showCustomAmount: false,
            },
          })
        }
        type="button"
      >
        {text}
      </DonationButton>
    ))}

    {!showCustomAmount ? (
      <DonationButton
        type="button"
        onClick={e =>
          dispatch({
            type: 'showCustomAmount',
            payload: true,
          })
        }
      >
        Custom Amount
      </DonationButton>
    ) : (
      <CustomAmount>
        <span>$</span>
        <Cleave
          placeholder="Enter other amount"
          options={{
            numeral: true,
            numeralPositiveOnly: true,
            numeralThousandsGroupStyle: 'thousand',
          }}
          onChange={({ target: { rawValue } }) => {
            let value;
            // If decimal specified
            if (rawValue.includes('.')) {
              let valueArr = rawValue.split('.');
              // If cents specified
              if (valueArr[1].length === 2) {
                value = parseInt(valueArr.join(''));
              }
              // If first cent is specified
              else if (valueArr[1].length === 1) {
                value = parseInt(valueArr.join('') + '0');
              }
              // No cents specified
              else {
                value = parseInt(valueArr.join('') + '00');
              }
            }
            // Return + cents
            else if (rawValue) {
              value = parseInt(rawValue + '00');
            }

            dispatch({
              type: 'changeAmount',
              payload: {
                amount: {
                  text: 'Custom',
                  value,
                  custom: true,
                },
                showCustomAmount: true,
              },
            });
          }}
        />
      </CustomAmount>
    )}
  </Donations>
);

export default AmountSelection;
