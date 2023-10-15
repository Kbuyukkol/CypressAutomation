/// <reference types ="cypress" />

describe('Button tests', () => {
  beforeEach(() => {
    cy.clearCookies;
    cy.visit('/multiple_buttons');
  });

  it('Check button actions', () => {
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');

    cy.get('.btn.btn-primary').then(($buttons) => {
      cy.wrap($buttons).eq(2).click();
      cy.contains('Clicked on button three!').should('be.visible');
    });
  });
});
