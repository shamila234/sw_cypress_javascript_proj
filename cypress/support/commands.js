// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("test-command", () => {
//   cy.request({
//     // user browsers cookie store
//     methos: "POST",
//     url: "https://www.thewarehouse.co.nz/account/submit-login?",
//     body: {
//       user: {
//         dwfrm_login_email: "test-email@gmail.com",
//         dwfrm_login_password: "test-password",
//       },
//     },
//   }).then((resp) => {
//     window.localStorage.setItem('jwt', resp.body.user.token);
//   });
// });
