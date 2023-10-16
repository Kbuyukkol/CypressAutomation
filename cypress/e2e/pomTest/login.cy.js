/// <reference types ="cypress" />


import { auth, locators } from '../../support/pages/auth';
import { navigateTo } from '../../support/pages/navigation';
const LoginLocators = require('../../support/pages/auth'); // reaches all objects of auth

describe('Auth:  Login', () => {

  beforeEach('navigate to login page', () => {
    cy.clearAllCookies();
    navigateTo.loginPage();
  });

  it.skip('Happy Path scenario with POM function', () => {
    cy.fixture('user').then((user) => {
      auth.login(user.user2.username, user.user2.password);
    })

    cy.textExists('You logged into a secure area!');
    auth.logout();

  });

  it('Happy Path scenario with POM Locators', () => {
    cy.fixture('user').then((user) => {
      LoginLocators.locators.userName.type(user.user2.username);
      LoginLocators.locators.password.type(user.user2.password);
      LoginLocators.locators.submit.click();
    })

    cy.textExists('You logged into a secure area!');
    auth.logout();

  });
});
