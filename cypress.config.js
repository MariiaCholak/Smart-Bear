const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
   env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    Test_USERNAME: process.env.Test_USERNAME,
    PASSWORD: process.env.PASSWORD
    },
     reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SmartBear App Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false
  },
    e2e: {
   etupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
 
  
  
    },
  },
});
