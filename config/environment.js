/* jshint node: true */

module.exports = function(environment) {
  var AUTHORIZER = process.env.AUTHORIZER || 'token';
  var authConfig = {};
  if (AUTHORIZER === 'cookie') {
      authConfig = {
          authorizer: 'authorizer:osf-cookie',
          authenticator: 'authenticator:osf-cookie',
          authenticationRoute: 'cookielogin'
      };
  }
  var ENV = {
      modulePrefix: 'prototype-ember',
      environment: environment,
      rootURL: '/',
      locationType: 'auto',

      EmberENV: {
          FEATURES: {
              // Here you can enable experimental features on an ember canary build
              // e.g. 'with-controller': true
          }
      },
      APP: {
          // Here you can pass flags/options to your application instance
          // when it is created
      },

      authorizationType: AUTHORIZER,
      'ember-simple-auth': authConfig, // TODO: Does this override any default behaviors?
      i18n: {
          defaultLocale: 'en-US'
      },

      'ember-cli-mirage': {
          enabled: false
      },

      fileUrl: "https://staging-files.osf.io/v1/resources/"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/prototype-ember/';

  }

  return ENV;
};
