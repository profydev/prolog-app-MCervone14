import { version as app_version } from "../../package.json";

describe("Footer", () => {
  it("Displays on each page", () => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
    cy.get("footer").should("exist");

    cy.visit("http://localhost:3000/dashboard/issues");
    cy.get("footer").should("exist");

    cy.visit("http://localhost:3000/dashboard/alerts");
    cy.get("footer").should("exist");

    cy.visit("http://localhost:3000/dashboard/users");
    cy.get("footer").should("exist");

    cy.visit("http://localhost:3000/dashboard/settings");
    cy.get("footer").should("exist");
  });

  it("Displays the correct text and logo", () => {
    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");
    cy.wait(1000);
    cy.get("footer")
      .find("div")
      .first()
      .should("contain.text", `Version: ${app_version}`)
      .and("have.css", "fontFamily", "Inter, sans-serif")
      .and("have.css", "fontWeight", "400")
      .and("have.css", "fontSize", "16px")
      .and("have.css", { lineHeight: "24px" });

    cy.get("footer")
      .find("nav")
      .find("ul")
      .find("li")
      .each(($el, index) => {
        const items = ["Docs", "API", "Help", "Community"];
        cy.wrap($el)
          .should("have.text", items[index])
          .and("have.css", "fontFamily", "inter, sans-serif")
          .and("have.css", "fontWeight", "500")
          .and("have.css", "fontSize", "16px")
          .and("have.css", "lineHeight", "24px");
      })
      .find("a")
      .each(($el) => {
        cy.wrap($el).should("have.attr", "href", "/dashboard#");
      });

    cy.get(".footer_logo__7KI7C > img")
      .should("have.attr", "src", "/icons/logo-small.svg")
      .and("have.css", "width", "23px")
      .and("have.css", "height", "33px");
  });
});
