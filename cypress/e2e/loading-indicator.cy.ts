describe("page that loads data", () => {
  it("should show the loading spinner and hide it afterwards", () => {
    let sendResponse: (value: unknown) => void;

    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept("data-url", (req) => {
      return trigger.then(() => {
        req.reply();
      });
    });

    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");

    cy.get("span")
      .should("be.visible")
      .then(() => {
        sendResponse(undefined);

        cy.get(".circle-spinner_circleStyle__pYi8K").should("not.exist");
        cy.get(".project-list_list__hPT0P").should("be.visible");
      });
  });
});
