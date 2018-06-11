// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'iiBXWIb4bOg1hjMEDYReYX6VsuCXsogX',
    domain: 'jawm.eu.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:3456', // e.g., http://localhost:3001
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  }
};
