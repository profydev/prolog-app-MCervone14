describe("Support button works", () => {
  beforeEach(() => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
  });

  it("opens up email with pre-filled information", () => {
    cy.get("button[name=support]")
      .click({ force: true })
      .then(() => {
        console.log("clicked support button");
      });
  });
});
