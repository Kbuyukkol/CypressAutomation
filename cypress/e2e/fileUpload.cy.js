// npm install --save-dev cypress-file-upload
// add to commands.js: import 'cypress-file-upload'
/// <reference types ="cypress" />

describe('File upload tests', () => {
  beforeEach('Navigate to upload page', () => {
    cy.clearCookies;
    cy.visit('/upload');
  });

  it('Check upload action', () => {
    cy.get('input#file-upload').attachFile('test.txt');
    cy.get('#file-submit').click();
    cy.get('#uploaded-files').then(() => {
      cy.contains('test.txt').should('be.visible');
    });
  });
});
