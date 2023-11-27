import mockProjects from "../fixtures/projects.json";
import type { Project } from "../../api/projects.types";

describe("Project Statuses", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard");

    cy.wait("@getProjects");
  });

  it("Displays the correct status badge and color", () => {
    cy.get("main")
      .find("ul")
      .find("li")
      .each(($el, index) => {
        const items = mockProjects as Project[];
        const status = items[index].status;

        switch (status) {
          case "info":
            cy.wrap($el)
              .find("div")
              .eq(14)
              .should("have.css", "background-color", "rgb(236, 253, 243)")
              .and("have.css", "color", "rgb(2, 122, 72)")
              .and("have.text", "Stable");
            break;
          case "warning":
            cy.wrap($el)
              .find("div")
              .eq(14)
              .should("have.css", "background-color", "rgb(255, 250, 235)")
              .and("have.css", "color", "rgb(181, 71, 8)")
              .and("have.text", "Warning");
            break;
          case "error":
            cy.wrap($el)
              .find("div")
              .eq(14)
              .should("have.css", "background-color", "rgb(254, 243, 242)")
              .and("have.css", "color", "rgb(180, 35, 24)")
              .and("have.text", "Critical");
            break;
        }
      });
  });
});
