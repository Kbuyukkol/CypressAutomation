describe('Alerts tests', { baseUrl: 'https://the-internet.herokuapp.com' }, () => {
  beforeEach(() => {
    cy.clearCookies;
    cy.visit('javascript_alerts');
  });

  it('JS alert', () => {
    cy.get('button[onclick="jsAlert()"]').click();

    cy.on('window:alert', (alert) => {
      expect(alert).to.contains('I am a JS Alert');
    });

    cy.get('#result').should('have.text', 'You successfully clicked an alert');
  });

  it('JS confirm -OK', () => {
    // OK is default
    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:confirm', (confirm) => {
      expect(confirm).to.contains('I am a JS Confirm');
    });

    cy.get('#result').should('have.text', 'You clicked: Ok');
  });

  it('JS confirm -Cancel', () => {
    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:confirm', (confirm) => {
      expect(confirm).to.contains('I am a JS Confirm');
    });

    cy.on('window:confirm', () => false); //use cancel button

    cy.get('#result').should('have.text', 'You clicked: Cancel');
  });

  it('JS prompt', () => {
    cy.window().then((window) => {
      cy.stub(window, 'prompt').returns('welcome');
    });

    cy.get('button[onclick="jsPrompt()"]').click();

    cy.get('#result').should('have.text', 'You entered: welcome');
  });

  
});
