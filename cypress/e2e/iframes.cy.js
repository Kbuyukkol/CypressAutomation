/// <reference types ="cypress" />

import 'cypress-iframe'

describe('handle iframe by wrap ', () => {
  it('handle iframes', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    const iframe = cy
      .get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);

    iframe.clear().type('Hello {ctrl+a}'); // for mac {cmd+a}

    cy.get("[aria-label='Bold']").click();
  });

  it('handle iframes by using custom command', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.getIframe('#mce_0_ifr').clear().type('Hello {ctrl+a}'); // for mac {cmd+a}

    cy.get("[aria-label='Bold']").click();
  });

  it('handle iframes by using cypress-iframe plugin', () => {
    //install plugin:  npm install  -D cypress-iframe
    //import 'cypress-iframe'

    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.frameLoaded('#mce_0_ifr'); //load the frame

    cy.iframe('#mce_0_ifr').clear().type('Hello {ctrl+a}');

    cy.get("[aria-label='Bold']").click();
  });
});
