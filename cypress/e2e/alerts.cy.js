
describe('Alerts tests', { baseUrl: 'https://demoqa.com'},() => {
    beforeEach(() => {
      cy.clearCookies;
      cy.visit('/alerts');
    });
  
    it('Check alert confirmation ', () => {
      
        const stub= cy.stub();

        cy.on('window:confirm',stub);

        cy.get('#confirmButton').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
      })
      cy.on('window:confirm',() =>true);

      cy.contains('You selected Ok').should('be.visible');

    })
});
