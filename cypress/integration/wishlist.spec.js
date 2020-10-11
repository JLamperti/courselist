context("Wishlist", () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });

    it("should display the loading message at first", () => {
        cy.get(".MuiCircularProgress-svg").as("loadingSpinner");
        cy.contains(
            'The data loading is "async", so look at this pretty spinning circle for a second :)'
        );
        cy.contains("(Uses a timeout to simulate async loading)");
    });

    it("should have access to the redux store", () => {
        cy.window().its("store").invoke("getState").should("deep.equal", {
            courseList: [],
            isLoadingData: true,
        });
    });

    it("should display the courselist after a delay", () => {
        cy.waitForAppLoad();
    });

    it("should change the wishlisted state of a single course", () => {
        cy.waitForAppLoad();
        cy.assertWishlistStatus({ wishlistFlag: true });
        cy.get(":nth-child(1) > .MuiPaper-root > .MuiButtonBase-root").click();
        cy.assertWishlistStatus({ wishlistFlag: false });
        cy.get(":nth-child(1) > .MuiPaper-root > .MuiButtonBase-root").click();
        cy.assertWishlistStatus({ wishlistFlag: true });
    });
});
