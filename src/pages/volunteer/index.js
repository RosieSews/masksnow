import React from 'react';
import styled from 'styled-components';
import { Formik, Field, FieldArray } from 'formik';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import Layout from '../../components/Layout';

const ErrorMsg = styled.p`
  color: red;
  font-style: italic;
  font-size: small;
`;

const roles = [
  { name: 'Sewist', description: 'Sew masks.', color: 'blue' },
  {
    name: 'Caller',
    description: 'Find local organizations that need masks.',
    color: 'yellow',
  },
  { name: 'Distributor', description: 'Distribute masks.', color: 'green' },
  {
    name: 'Donations',
    description: 'Donate materials or money.',
    color: 'green',
  },
  {
    name: 'State Volunteer Lead',
    description: 'Volunteer coordinator for a state.',
    color: 'green',
  },
  {
    name: 'Local Volunteer Coordination',
    description: 'Volunteer coordinator for a smaller region of a state.',
    color: 'green',
  },
  {
    name: 'National: PR / Outreach',
    description: 'Behind the scenes help.',
    color: 'green',
  },
  {
    name: 'National: Tech / Web Dev / Airtable',
    description: 'Behind the scenes help.',
    color: 'green',
  },
  {
    name: 'National: Graphic Design / Digital Illustration',
    description: 'Behind the scenes help.',
    color: 'green',
  },
  {
    name: 'National: General Administrative',
    description: 'Behind the scenes help.',
    color: 'green',
  },
  { name: 'Other', description: 'Anything else.', color: 'green' },
];

const validateEmail = value => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validateZipcode = value => {
  let error;
  if (!value) {
    error = 'Required.';
  } else if (isNaN(value) || value.length > 5) {
    error = 'Invalid zip code.';
  }
  return error;
};

export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{ height: 'auto' }}
        >
          <Formik
            initialValues={{
              name: '',
              email: '',
              zipcode: '',
              roles: [],
              skills: '',
              comments: '',
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({ values, errors, ...props }) => (
              <form
                onSubmit={props.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Field
                  name="name"
                  validate={value =>
                    value.length <= 3 &&
                    '*Required. Name must be greater than 3 characters.'
                  }
                  render={({ field }) => (
                    <>
                      <TextField
                        label="Name"
                        size="small"
                        required
                        value={values.name}
                        {...field}
                      />
                      {errors.hasOwnProperty('name') && (
                        <ErrorMsg>{errors.name}</ErrorMsg>
                      )}
                    </>
                  )}
                />
                <Field
                  name="zipcode"
                  validate={validateZipcode}
                  render={({ field }) => (
                    <>
                      <TextField
                        label="Zipcode"
                        size="small"
                        required
                        error={errors.hasOwnProperty('zipcode')}
                        value={values.zipcode}
                        {...field}
                      />
                      {errors.hasOwnProperty('zipcode') && (
                        <ErrorMsg>{errors.zipcode}</ErrorMsg>
                      )}
                    </>
                  )}
                />
                <FieldArray
                  name="roles"
                  render={arrayHelpers => (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h1>Roles:</h1>
                      {roles.map((role, idx) => (
                        <FormControlLabel
                          key={idx}
                          label={
                            <p>
                              {role.name} - <em>{role.description}</em>
                            </p>
                          }
                          control={
                            <Checkbox
                              color={role.color}
                              checked={values.roles.includes(role.name)}
                              onChange={() => {
                                values.roles.includes(role.name)
                                  ? arrayHelpers.remove(
                                      values.roles.indexOf(role.name)
                                    )
                                  : arrayHelpers.push(role.name);
                              }}
                            />
                          }
                        />
                      ))}
                    </div>
                  )}
                />
                <Field
                  name="skills"
                  render={({ field }) => (
                    <TextField
                      label="Skills"
                      size="small"
                      value={values.skills}
                      {...field}
                    />
                  )}
                />
                <Field
                  name="email"
                  validate={validateEmail}
                  render={({ field }) => (
                    <>
                      <TextField
                        label="Email"
                        size="small"
                        required
                        value={values.email}
                        {...field}
                      />
                      {errors.hasOwnProperty('email') && (
                        <ErrorMsg>{errors.email}</ErrorMsg>
                      )}
                    </>
                  )}
                />
                <Field
                  name="comments"
                  render={({ field }) => (
                    <TextField
                      label="Comments"
                      size="small"
                      multiline
                      value={values.comments}
                      {...field}
                    />
                  )}
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </Layout>
    );
  }
}
