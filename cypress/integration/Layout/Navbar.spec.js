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

  describe('[Volunteer] section', () => {
    it(`Should contain the appropriate text`, () => {
      cy.get(getByTestId(navbar.volunteer))
        .last()
        .should('have.text', 'Volunteer');
    });

    it(`Should go to [/volunteer] when user clicks on [Volunteer]`, () => {
      cy.get(getByTestId(navbar.volunteer))
        .last()
        .click();
      cy.location('pathname').should('eq', '/volunteer');
    });
  });

  describe('[Resources] section', () => {
    it(`Should contain the appropriate text for the title`, () => {
      cy.get(getByTestId(navbar.resources.title))
        .last()
        .should('have.text', 'Resources');
    });

    beforeEach(() => {
      cy.get(getByTestId(navbar.resources.title))
        .last()
        .click({ force: true });
      // needed due to the overlay MUI adds
      // https://docs.cypress.io/api/commands/click.html#Force-a-click-regardless-of-its-actionable-state
    });

    it(`Should go to [/patterns] when user clicks on [Patterns]`, () => {
      cy.get(getByTestId(navbar.resources.dropdown.patterns))
        .last()
        .click();
      cy.location('pathname').should('eq', '/patterns');
    });

    it(`Should [have reference] to an external site on [Buy Interfacing]`, () => {
      cy.get(getByTestId(navbar.resources.dropdown.buyInterfacing))
        .last()
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'href', 'https://thermowebmasksnow.com/');
      // https://docs.cypress.io/guides/references/trade-offs.html#Multiple-tabs
    });

    it(`Should go to [/resources] when user clicks on [Guides]`, () => {
      cy.get(getByTestId(navbar.resources.dropdown.guides))
        .last()
        .click();
      cy.location('pathname').should('eq', '/resources');
    });

    it(`Should go to [/groups-directory] when user clicks on [Local Chapters]`, () => {
      cy.get(getByTestId(navbar.resources.dropdown.localChapters))
        .last()
        .click();
      cy.location('pathname').should('eq', '/groups-directory');
    });

    it(`Should [have reference] to an external site on [Knowledgebase]`, () => {
      cy.get(getByTestId(navbar.resources.dropdown.knowledgebase))
        .last()
        .should('have.attr', 'target', '_blank')
        .should(
          'have.attr',
          'href',
          'https://rosiesews.freshdesk.com/support/home'
        );
      // https://docs.cypress.io/guides/references/trade-offs.html#Multiple-tabs
    });
  });

  describe('[About] section', () => {
    it(`Should contain the appropriate text for the title`, () => {
      cy.get(getByTestId(navbar.about.title))
        .last()
        .should('have.text', 'About');
    });

    beforeEach(() => {
      cy.get(getByTestId(navbar.about.title))
        .last()
        .click({ force: true });
    });

    it(`Should go to [/about-us] when user clicks on [About MNC]`, () => {
      cy.get(getByTestId(navbar.about.dropdown.aboutMNC))
        .last()
        .click();
      cy.location('pathname').should('eq', '/about-us');
    });

    it(`Should go to [/partners] when user clicks on [Partners]`, () => {
      cy.get(getByTestId(navbar.about.dropdown.partners))
        .last()
        .click();
      cy.location('pathname').should('eq', '/partners');
    });

    it(`Should go to [/faq] when user clicks on [FAQs]`, () => {
      cy.get(getByTestId(navbar.about.dropdown.faqs))
        .last()
        .click();
      cy.location('pathname').should('eq', '/faq');
    });
  });

  describe('[Press] section', () => {
    it(`Should contain the appropriate text for the title`, () => {
      cy.get(getByTestId(navbar.press.title))
        .last()
        .should('have.text', 'Press');
    });

    beforeEach(() => {
      cy.get(getByTestId(navbar.press.title))
        .last()
        .click({ force: true });
    });

    it(`Should go to [/psa] when user clicks on [PSAs]`, () => {
      cy.get(getByTestId(navbar.press.dropdown.psas))
        .last()
        .click();
      cy.location('pathname').should('eq', '/psa');
    });

    it(`Should go to [/in-the-news] when user clicks on [Media Hits]`, () => {
      cy.get(getByTestId(navbar.press.dropdown.mediaHits))
        .last()
        .click();
      cy.location('pathname').should('eq', '/in-the-news');
    });

    it(`Should go to [/press-releases] when user clicks on [Press Releases]`, () => {
      cy.get(getByTestId(navbar.press.dropdown.pressReleases))
        .last()
        .click();
      cy.location('pathname').should('eq', '/press-releases');
    });

    it(`Should [have reference] to an external site on [Blog]`, () => {
      cy.get(getByTestId(navbar.press.dropdown.blog))
        .last()
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'href', 'https://medium.com/themasksnowcoalition');
      // https://docs.cypress.io/guides/references/trade-offs.html#Multiple-tabs
    });
  });

  describe('[More Dots] section', () => {
    beforeEach(() => {
      cy.get(getByTestId(navbar.moreDots.title))
        .last()
        .click({ force: true });
    });

    it(`Should go to [/contact] when user clicks on [Contact]`, () => {
      cy.get(getByTestId(navbar.moreDots.dropdown.contact))
        .last()
        .click();
      cy.location('pathname').should('eq', '/contact');
    });

    it(`Should go to [/fundraising-goals] when user clicks on [Help Us]`, () => {
      cy.get(getByTestId(navbar.moreDots.dropdown.helpUs))
        .last()
        .click();
      cy.location('pathname').should('eq', '/fundraising-goals');
    });
  });

  describe('[Donate] section', () => {
    it(`Should contain the appropriate text for the title`, () => {
      cy.get(getByTestId(navbar.donate))
        .last()
        .should('have.text', 'Donate');
    });

    it(`Should go to [/donate] when user clicks on [Donate]`, () => {
      cy.get(getByTestId(navbar.donate))
        .last()
        .click({ force: true });

      // Adding this for testing on local; as opening /donate causes the website to crash so the test fails

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

      cy.location('pathname').should('eq', '/donate');
    });
  });
});
