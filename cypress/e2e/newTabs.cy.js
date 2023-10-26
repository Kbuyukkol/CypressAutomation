

describe('Handle tabs', () => {
  it.skip('handle tabs by invoke function', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.get('.example>a').invoke('removeAttr', 'target').click();

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

    cy.go('back');
  });

  it('handle tabs by getting href', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.get('.example>a').then((element) => {
      let url = element.prop('href');

      cy.visit(url);
    });

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

    cy.go('back');
  });
});
