const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: { //e2e - it is an object
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/failures/screenshots'
  },
});
