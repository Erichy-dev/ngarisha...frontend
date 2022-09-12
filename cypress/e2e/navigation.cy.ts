context("navigation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#addToCart").contains("SELECT").click();
    cy.get("#selectedNumber").contains("SELECTED").click();
    cy.get("#deliveryButton").contains("DELIVERY").click();
  });

  it("go back or forward in the browser history", () => {
    // checks url path contains the specific pathname
    cy.location("pathname").should("include", "purchase");

    cy.go("back");
    cy.location("pathname").should("include", "confirm");
  });

  it("reloads page", () => {
    cy.reload();
    cy.reload(true);
  });

  it("visits remote page", () => {
    // Pass options to the visit
    cy.visit("/purchase", {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
      onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
    });
  });

  it("visits wrong page", () => {
    cy.visit("/notFound");
  });
});
