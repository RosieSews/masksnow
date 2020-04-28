import React, { useReducer } from 'react';
import { Formik, Form, useField } from 'formik';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import * as Yup from 'yup';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  useStripe,
  CardElement,
  useElements,
} from '@stripe/react-stripe-js';
import Button from '../button';
import StripeForm from './StripeForm';
import AmountSelection from './AmountSelection';
import { STRIPE_KEY, API_PATH, isProd } from '../../constants';

const stripePromise = loadStripe(STRIPE_KEY);

const DonateContainer = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${props => props.theme.colors.whiteGrey};
  border: 1px solid ${props => props.theme.colors.whiteGrey};
`;

const Label = styled.header`
  display: block;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
`;

const Row = styled.div`
  margin-bottom: 1.5rem;
`;

const Message = styled.div`
  border-radius: 0.25rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.whiteGrey};
  background-color: ${props =>
    props.error ? props.theme.colors.discord : props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  header {
    font-family: ${props => props.theme.fonts.header};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
  }
`;

const Input = styled.input`
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
  &--invalid,
  &.error {
    border-color: ${props => props.theme.colors.discord};
  }
  &--webkit-autofill {
    background-color: #fefde5 !important;
  }
`;

const ErrorText = styled.div`
  min-height: 16px;
  color: ${({ theme }) => theme.colors.discord};
`;

const DisclaimerText = styled.p`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5em;
`;

const TextInput = ({ label, disclaimer, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label style={{ marginTop: 0 }} htmlFor={props.id || props.name}>
        {label}
      </Label>
      {disclaimer && disclaimer}
      <Input
        className={`text-input ${meta.touched && meta.error ? 'error' : ''}`}
        {...field}
        {...props}
      />
      <ErrorText>{meta.touched && meta.error ? meta.error : null}</ErrorText>
    </>
  );
};

// Form Data Reducer
function reducer(state, { type, payload }) {
  switch (type) {
    case 'processing':
      return { ...state, processing: payload };
    case 'changeAmount':
      const { amount, showCustomAmount } = payload;
      return {
        ...state,
        amount,
        showCustomAmount,
      };
    case 'showCustomAmount':
      return { ...state, showCustomAmount: payload };
    case 'handleError':
      return { ...state, error: payload };
    case 'handleSuccess':
      return { ...state, success: payload, error: null };
    default:
      throw new Error();
  }
}

const FormContainer = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [
    { error, success, processing, amount, showCustomAmount },
    dispatch,
  ] = useReducer(reducer, {
    processing: false,
    amount: {
      text: '$100.00',
      value: 10000,
      custom: false,
    },
    showCustomAmount: false,
    error: false,
    success: false,
  });

  return (
    <DonateContainer>
      <Formik
        initialValues={{
          name: '',
          email: '',
          memo: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          memo: Yup.string().max(45, 'Must be 45 characters or less'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
          }

          dispatch({ type: 'processing', payload: true });
          try {
            const response = await fetch(`${API_PATH}/paymentIntent`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount: amount.value,
                description: values.memo,
                metadata: {
                  organization: 'MasksNOW',
                  memo: values.memo,
                },
              }),
            });
            if (!response.ok) {
              let errorText = await response.text();
              if (!isProd) {
                throw Error(errorText);
              } else {
                throw new Error(
                  "We're unable to process your donation. Try again later. If this persists please contact our support team."
                );
              }
            }
            const useableResponse = await response.json();
            const clientSecret = useableResponse.client_secret;

            const { error, paymentIntent } = await stripe.confirmCardPayment(
              clientSecret,
              {
                payment_method: {
                  card: elements.getElement(CardElement),
                  billing_details: {
                    email: values.email,
                    name: values.name,
                    // address: {
                    //   city: null,
                    //   country: null,
                    //   line1: null,
                    //   line2: null,
                    //   postal_code: "94103",
                    //   state: null,
                    // },
                  },
                },
                receipt_email: values.email,
              }
            );
            if (error) {
              throw error;
            }
            // The payment has been processed!
            if (paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              // There's a risk of the customer closing the window before callback
              // execution. Set up a webhook or plugin to listen for the
              // payment_intent.succeeded event that handles any business critical
              // post-payment actions.
              dispatch({ type: 'handleSuccess', payload: true });
            }
          } catch (error) {
            dispatch({ type: 'handleError', payload: error.message });
          }
          dispatch({ type: 'processing', payload: false });
          setSubmitting(false);
        }}
      >
        {success ? (
          <Message>
            <header>Thank you!</header>
            <p>We successfully processed your donation.</p>
          </Message>
        ) : (
          <Form style={{ margin: 0 }}>
            <Row>
              <Grid columns={'repeat(auto-fit,minmax(250px,1fr))'} gap={'1rem'}>
                <Cell>
                  <TextInput
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Rosie Sews"
                  />
                </Cell>
                <Cell>
                  <TextInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="rosie@masksNOW.org"
                  />
                </Cell>
              </Grid>
            </Row>
            <Row>
              <TextInput
                label="Memo (optional)"
                name="memo"
                type="text"
                placeholder="credit to abc MasksNOW chapter"
                disclaimer={
                  <DisclaimerText>
                    If you want this donation credited to a specific masksnow
                    chapter, name them below
                  </DisclaimerText>
                }
              />
            </Row>
            {/* Donation Amounts */}
            <Row>
              <Label>Donation Amount</Label>
              <AmountSelection
                amount={amount}
                showCustomAmount={showCustomAmount}
                dispatch={dispatch}
              />
            </Row>

            {/* Stripe Data */}
            <Row>
              <Label>Card Details</Label>
              <StripeForm />
            </Row>
            {/* Submission Button */}
            <Button
              type="submit"
              variant="secondary"
              disabled={!stripe || processing}
              style={{ fontSize: '1.1rem', height: '40px' }}
            >
              {processing ? 'Processing...' : 'Confirm Donation'}
            </Button>
            {error && (
              <Message error style={{ marginTop: '2rem' }}>
                <header>An Error Occurred</header>
                <p>{error}</p>
              </Message>
            )}
          </Form>
        )}
      </Formik>
      {/* Show Development Mode */}
      {!isProd && (
        <Message error style={{ marginTop: '2rem' }}>
          <header>Development Mode is Enabled</header>
          <p>All donation submissions will hit the test Stripe account.</p>
        </Message>
      )}
    </DonateContainer>
  );
};

const DonateForm = () => (
  <Elements stripe={stripePromise}>
    <FormContainer />
  </Elements>
);

export default DonateForm;
