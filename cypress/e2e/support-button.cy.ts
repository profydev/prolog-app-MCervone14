describe("Support button works", () => {
  it("Clicks the Support button and checks the mailto link", () => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");

    cy.get("nav")
      .contains("Support")
      .should("have.attr", "href")
      .and(
        "equals",
        "mailto:support@prolog-app.com?subject=Support%20Request:%20",
      );
  });
});
