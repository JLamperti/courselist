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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("assertWishlistStatus", ({ wishlistFlag }) => {
    if (wishlistFlag) {
        cy.get(":nth-child(1) > .MuiPaper-root > [data-cy=button-wishlist] ");
    } else {
        cy.get(":nth-child(1) > .MuiPaper-root > [data-cy=button-unwishlist]");
    }
});

Cypress.Commands.add("waitForAppLoad", () => {
    cy.contains("Courses", { timeout: 5000 });
    cy.window()
        .its("store")
        .invoke("getState")
        .its("isLoadingData")
        .should("equal", false);
});
