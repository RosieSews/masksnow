/* eslint-disable no-undef */
/// <reference types="cypress" />

import testIds from '../../../shared/testIds';

const {
  common: { footer },
} = testIds;

describe('[Footer] Integration test', () => {
  before(() => {
    cy.visit('/');
  });

  describe('[Social] section', () => {
    it(`Should [have reference] to an external site on [Facebook]`, () => {
      cy.findByTestId(footer.social.facebook)
        .last()
        .should('have.attr', 'target', '_blank')
        .should(
          'have.attr',
          'href',
          'https://www.facebook.com/groups/masksnoworg'
        );
    });

    it(`Should [have reference] to an external site on [Instagram]`, () => {
      cy.findByTestId(footer.social.instagram)
        .last()
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'href', 'https://www.instagram.com/masksnoworg');
    });

    it(`Should [have reference] to an external site on [Twitter]`, () => {
      cy.findByTestId(footer.social.twitter)
        .last()
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'href', 'https://twitter.com/masksnoworg');
    });
  });

  describe('[Link] section', () => {
    it(`Should go to [/faq] when user clicks on [FAQs]`, () => {
      cy.findByTestId(footer.links.faqs)
        .last()
        .click();
      cy.location('pathname').should('eq', '/faq');
    });

    it(`Should go to [/contact] when user clicks on [Contact]`, () => {
      cy.findByTestId(footer.links.contact)
        .last()
        .click();
      cy.location('pathname').should('eq', '/contact');
    });

    it(`Should go to [/about-us] when user clicks on [About Us]`, () => {
      cy.findByTestId(footer.links.aboutUs)
        .last()
        .click();
      cy.location('pathname').should('eq', '/about-us');
    });
  });
});
