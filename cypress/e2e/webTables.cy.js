

describe('Webtable tests', { baseUrl: 'https://demoqa.com' }, () => {
  beforeEach(
    ('Navigate to webtables page',
    () => {
      cy.clearCookies();
      cy.visit('/webtables');
    }),
  );

  it.skip('Check finding a record in a table', () => {
    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'Alden')
      .then((row) => {
        cy.wrap(row).find('["title="Edit"]').click();
        cy.get('#firstName').clear().type('Halil');
        cy.get('#lastName').clear().type('Akyol');
        cy.get('#submit').click();

        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'Halil');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Akyol');
      });
  });

  it.skip('Check finding a record and deleting in a table', () => {
    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'Alden')
      .then((row) => {
        cy.wrap(row).find('["title="Delete"]').click();
      });
      cy.get('.rt-body').should('not.contain','Alden');
      cy.get('#searchBox').type('Alden');
      cy.get('.rt-body').should('not.contain','Alden');
  });
});
