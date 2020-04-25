/* eslint-disable no-undef */
/// <reference types="cypress" />

import testIds from '../../../shared/testIds';
import { getByTestId } from '../../utils';

const {
  common: { navbar },
} = testIds;

describe('[Navbar] Integration test', () => {
  before(() => {
    cy.visit('/');
  });

  it(`...`, () => {
    cy.get(getByTestId(navbar.volunteer))
      .first()
      .last();
  });
});
