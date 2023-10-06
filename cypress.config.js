const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  // retries: 1,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },

  // "reporter": "mochawesome",
  // "reporterOptions": {
  //   "reportDir": "cypress/results",
  //   "overwrite": false,
  //   "html": false,
  //   "json": true
  // },


  env: {
    careerSite: "https://www.amazon.science/careers",
    shoppingSiteIN: "https://www.amazon.in/",
    username: "john.wick@amazon.com",
    password: "thePassword",
  }
})
