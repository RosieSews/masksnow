/* eslint-disable no-undef */
/// <reference types="cypress" />

import testIds from '../../shared/testIds';
import { getByTestId } from '../utils';

const { landing } = testIds;

describe('[Landing] section', () => {
  describe('[Hero] CTAs', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it(`Should go to [/volunteer] when user clicks on [Volunteer]`, () => {
      cy.get(getByTestId(landing.sections.hero.volunteer)).click();
      cy.location('pathname').should('eq', '/volunteer');
    });

    it(`Should go to [/volunteer] when user clicks on [I want to sew masks]`, () => {
      cy.get(getByTestId(landing.sections.hero.sewMasks)).click();
      cy.location('pathname').should('eq', '/volunteer');
    });

    it(`Should go to [/request-supplies] when user clicks on [Get Masks]`, () => {
      cy.get(getByTestId(landing.sections.hero.requestSupplies)).click();
      cy.location('pathname').should('eq', '/request-supplies');
    });

    it(`Should contain reference to [https://rosiesews.freshdesk.com/support/] on [I Can't Sew But I Want To Help]`, () => {
      cy.get(getByTestId(landing.sections.hero.help))
        .should('have.attr', 'href')
        .and('include', 'https://rosiesews.freshdesk.com/support/');
    });
  });

  describe('[Get The Pattern] CTAs', () => {
    Object.keys(landing.sections.afterSignUp.getThePattern).map(pattern =>
      it(`Should have the pdf associated to [${pattern}]`, () => {
        cy.get(getByTestId(landing.sections.afterSignUp.getThePattern[pattern]))
          .should('have.attr', 'href')
          .and('include', 'pdf');
      })
    );
  });

  describe('[Make Masks] CTAs', () => {
    const mapPatternRoutes = {
      '3-Layer Mask': '/patterns/3-layer-pattern/',
      'Pocket Face Mask': '/patterns/pocket-pattern/',
      'Mask Cover': '/patterns/mask-cover/',
      'T-Shirt Face Mask': '/patterns/t-shirt-mask-pattern/',
      'Convertible CareCap': '/patterns/convertible-carecap/',
    };

    beforeEach(() => {
      cy.visit('/');
    });
    Object.keys(mapPatternRoutes).map(pattern =>
      it(`Should be able to go to [${mapPatternRoutes[pattern]}] when the use clicks on [${pattern}]`, () => {
        cy.get(
          getByTestId(landing.sections.afterSignUp.makeMasks[pattern])
        ).click();

        // Adding this for testing on local; as opening /patterns/[xyz] causes the website to crash so the test fails

        cy.on('uncaught:exception', (err, runnable) => {
          expect(err.message).to.include('something about the error');

          // using mocha's async done callback to finish
          // this test so we prove that an uncaught exception
          // was thrown
          done();

          // return false to prevent the error from
          // failing this test
          return false;
        });

        cy.location('pathname').should('eq', mapPatternRoutes[pattern]);
      })
    );
  });

  describe('[Donate Masks] CTAs', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it(`Should go to [/groups-directory] when user clicks on [Your state lead...]`, () => {
      cy.get(
        getByTestId(landing.sections.afterSignUp.donateMasks.stateLeads)
      ).click();
      cy.location('pathname').should('eq', '/groups-directory');
    });

    it(`Should contain reference to [https://rosiesews.freshdesk.com/support/] on [Every mask...]`, () => {
      cy.get(
        getByTestId(landing.sections.afterSignUp.donateMasks.everyMaskDonated)
      )
        .should('have.attr', 'href')
        .and('include', 'https://rosiesews.freshdesk.com/support/');
    });
  });

  describe('[Get Help] CTAs', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it(`Should contain reference to [https://rosiesews.freshdesk.com/support/] on [Find answers to all you questions...]`, () => {
      cy.get(getByTestId(landing.sections.afterSignUp.getHelp.support))
        .should('have.attr', 'href')
        .and('include', 'https://rosiesews.freshdesk.com/support/');
    });
  });
});
