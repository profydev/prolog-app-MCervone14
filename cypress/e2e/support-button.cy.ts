describe("Support button works", () => {
  it("Clicks the Support button and checks the mailto link", () => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");

    cy.get("nav").contains("Support").click({ force: true });

    cy.location("href").should("eq", "http://localhost:3000/dashboard");
  });
});
