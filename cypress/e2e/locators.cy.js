/// <reference types ="cypress" />

describe("Find elements", () => {
  beforeEach(() => {
    cy.clearCookies;
    cy.visit("/login");
  });

  

  it("Check finding elements by travelling through DOM", () => {
    cy.get('input[name="username"]')
      .parents("form")
      .find("button")
      .should("contain", "Login")
      .click();
  });
});
