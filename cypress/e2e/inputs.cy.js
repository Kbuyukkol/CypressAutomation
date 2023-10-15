/// <reference types ="cypress" />

describe('Input tests', () => {
  beforeEach('Navigate to registration page', () => {
    cy.clearCookies;
    cy.visit('/registration_form');
  });

  it('Check input', () => {
    cy.get('input[name="firstname"]').type('Ali');
    cy.get('input[name="lastname"]').type('Akyol');
    cy.get('input[name="username"]').type('CypressLover');
    cy.get('input[name="email"]').type('ali.akyol@gmail.com');
    cy.get('input[name="password"]').type('********');
    cy.get('input[name="phone"]').type('555-111-0000');
    cy.get('input[name="birthday"]').type('01/01/2000');
  });

  it('Check radio buttons', () => {
    cy.get('.radio')
      .find('[type=radio]')
      .then((radio) => {
        cy.wrap(radio).first().check().should('be.checked');

        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('[data-bv-icon-for="gender"]').should('be.visible');

        cy.wrap(radio).eq(2).should('not.be.checked');
      });
  });

  it('Check checkboxes', () => {
    cy.get('[type="checkbox"]').then((checkbox) => {
      cy.wrap(checkbox).eq(1).check().should('be.checked');

      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');

      cy.wrap(checkbox).eq(2).should('have.value', 'javascript').check().should('be.checked');
    });
  });

  it('Check dropdown', () => {
    cy.get('select[name="job_title"]').select('SDET');
    cy.get('select[name="job_title"]').contains('SDET');
  });

  it('Check all options from a dropdown', () => {
    cy.fixture('departments').then((departments) => {
      cy.get('select[name="department"]>option').each((option, index) => {
        cy.get('select[name="department"]')
          .select(option.text())
          .should('have.value', option.val())
          .contains(departments[index]);
      });
    });
  });
});
