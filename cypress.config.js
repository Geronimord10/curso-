const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reporterDir: "cypress/reports",
    charts: true,
    reportPageTitle: 'custom-title',
    enbeddedScreenshots: true,
    inlineAssets: true,
    saveAllAtempts: false,
  },
  video: false,
  env: {
    env: { grepFilterSpecs: true, grepOmitFiltered: true },
    viewportmobile: {
      device: "iphone-xr",
    },
    viewportdesktop: {
      device: "macbook-16",
    },
  },
  e2e: {
    baseUrl: "https://www.edenentradas.com.ar/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter')(on);
      // implement node event listeners here
      require("@bahmutov/cy-grep/src/plugin")(config);
      // IMPORTANT: return the config object
      return config;
    },
  },
});