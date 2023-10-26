

import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('mouse actions', () => {
  it('mouse hover over', () => {
    cy.visit('https://demo.opencart.com/');

    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
  });

  it('right click by trigger', () => {
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');

    cy.get('.context-menu-icon-copy> span').should('be.visible').click();
  });

  it('right click by rightclick', () => {
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    cy.get('.context-menu-one.btn.btn-neutral').rightclick();
    cy.get('.context-menu-icon-copy> span').should('be.visible').click();
    
  });

  it('double click by trigger', () => {
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

    cy.frameLoaded('#iframeResult');
    cy.iframe('#iframeResult').contains('button','Copy Text').trigger('dblclick');
    cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

    
  });

  it('double click by dblclick ', () => {
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

    cy.frameLoaded('#iframeResult');
    cy.iframe('#iframeResult').contains('button','Copy Text').dblclick();
    cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

    
  });

  it('drag and drop by using plugin ', () => {
    // install plugin: npm i @4tw/cypress-drag-drop
    // require ('@4tw/cypress-drag-drop') 

    cy.visit('https://the-internet.herokuapp.com/drag_and_drop');

    cy.wait(3000);

    cy.get('#column-a').drag('#column-b');

    
  });

  it.only('scrolling page ', () => {
    

    cy.visit('https://www.britannica.com/topic/list-of-countries-1993160');

    

    cy.get('.md-crosslink').contains('Mexico').scrollIntoView({duration:2000});
    cy.get('.md-crosslink').contains('Mexico').should('be.visible');

    cy.get('.md-crosslink').contains('Turkey').scrollIntoView({duration:4000});
    cy.get('.md-crosslink').contains('Turkey').should('be.visible');
    
  });







});
