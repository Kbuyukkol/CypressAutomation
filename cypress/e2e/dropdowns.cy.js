describe('handle dropdowns', () => {
  it('dropdown with select', () => {
    cy.visit('https://www.zoho.com/commerce/free-demo.html');

    cy.get('#zcf_address_country').select('Turkey').should('have.value', 'Turkey');
  });

  it('dropdown without select', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    cy.get('#select2-billing_country-container').click();

    cy.get('.select2-search__field').type('Japan{enter}');

    cy.get('#select2-billing_country-container').should('have.text', 'Japan');
  });

  it('auto suggest dropdown', () => {
    cy.visit('https://www.wikipedia.org/');

    cy.get('#searchInput').type('Türkiye');
    cy.get('.suggestion-title').contains('illeri').click();

  });

  it('dynamic dropdown', () => {
    cy.visit('https://www.google.com');

    cy.get('textarea[name="q"]').type('cypress automation');

    cy.get('div.wM6W7d>span').should('have.length.greaterThan',10);

    cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
        if($el.text()=='cypress automation tool'){
          cy.wrap($el).click();
        }


    })
    

  });

    
  });




