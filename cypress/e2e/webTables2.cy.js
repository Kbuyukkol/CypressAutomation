/// <reference types ="cypress" />

describe('Webtable tests', { baseUrl: 'https://the-internet.herokuapp.com' }, () => {
  beforeEach(
    ('Navigate to tables page',
    () => {
      cy.clearCookies();
      cy.visit('/tables');
    }),
  );

  it('check number of rows and columns', () => {
    cy.get('#table1>tbody>tr').should('have.have.length', '4');

    cy.get('#table1>thead>tr>th').should('have.have.length', '6');
  });

  it('check specific data from the table', () => {
    cy.get('#table1>tbody>tr>td').first().contains('Smith');
    cy.get('#table1>tbody>tr>td').first().next().contains('John');
    cy.get('#table1>tbody>tr>td').first().next().next().should('have.text', 'jsmith@gmail.com');
        
  });

  it('check number of rows and columns', () => {
    cy.get('#table1>tbody>tr').each(($eachRow,index,$allRows)=>{
            cy.wrap($eachRow).within(()=>{

                cy.get('td').each(($eachColumn,index,$allColumns)=>{

                    cy.log($eachColumn.text());
                })

            })

    })

    


  });

});
