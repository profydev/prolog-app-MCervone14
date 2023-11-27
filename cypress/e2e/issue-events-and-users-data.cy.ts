import mockIssues from "../fixtures/issues-page-1.json";

describe("Issue page Events and Users Data", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=1", {
      fixture: "issues-page-1.json",
    }).as("getIssue");

    cy.viewport(1025, 900);
    cy.visit("http://localhost:3000/dashboard/issues?page=1");

    cy.wait("@getIssue");
  });

  it("Displays the correct number of events and users", () => {
    cy.get("tbody")
      .find("tr")
      .each(($el, index) => {
        const items = mockIssues.items as {
          numEvents: number;
          numUsers: number;
        }[];
        const numEvents = items[index].numEvents;
        const numUsers = items[index].numUsers;
        cy.wrap($el).find("td").eq(2).should("have.text", numEvents.toString());
        cy.wrap($el).find("td").eq(3).should("have.text", numUsers.toString());
      });
  });
});
