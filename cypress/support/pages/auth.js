class Auth {
  login(user_name, password) {
    cy.get('[name="username"]').type(user_name);
    cy.get('[name="password"]').type(password);
    cy.get('#wooden_spoon').click();
  }

  logout() {
    cy.contains('Logout').should('be.visible').click();
  }
}

const auth = new Auth();

class Locators {
  get userName() {
    return cy.get('[name="username"]', { timeout: 10000 });
  }

  get password() {
    return cy.get('[name="password"]', { timeout: 10000 });
  }

  get submit() {
    return cy.get('#wooden_spoon');
  }
}

const locators = new Locators();

module.exports = {
  auth,
  locators,
};
