const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
   env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    TEST_USERNAME: process.env.TEST_USERNAME,
    PASSWORD: process.env.PASSWORD
    },
     reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/', 
    charts: true,
    reportPageTitle: 'SmartBear App Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false
  },
    e2e: {
     setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
 
  
  
    },
  },
});
