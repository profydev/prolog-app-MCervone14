describe("page that loads data shows error message", () => {
  it("should show the error message when request fails and refetch the data when clicking button", () => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      forceNetworkError: true,
    }).as("getNetworkError");

    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
    cy.wait("@getNetworkError");
    cy.wait(10000);
    cy.get(".error-message_container__ktcpD")
      .find("p")
      .should(
        "have.text",
        "There was a problem while loading the project data",
      );
  });
});
