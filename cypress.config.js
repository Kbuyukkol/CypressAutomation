const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://practice.cydeo.com/",
    env: {
      login: "/login"
    },
    video: false,
    retries: 1,
    defaultCommandTimeout: 5000,
    
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on); 
      // implement node event listeners here
    },
  },
});
