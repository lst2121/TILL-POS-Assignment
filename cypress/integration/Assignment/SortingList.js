///<reference types="Cypress" />

describe("Sort the list containing computers", function () {
  beforeEach(() => {
    cy.visit("https://computer-database.gatling.io/computers");
  });
  it("sorting based on computer name", function () {
    //ascending order
    cy.log("ascending order");
    cy.get(".col-name a").click();
    cy.get(".col-name a").click();
    cy.url().should("contain", "asc");

    //descending order
    cy.log("descending order");
    cy.get(".col-name a").click();
    cy.url().should("contain", "desc");
  });

  it("sorting based on introduction date", function () {
    //ascending order
    cy.log("ascending order");
    cy.get(".col-introduced.header ").click();
    cy.url().should("contain", "asc");

    //descending order
    cy.log("descending order");
    cy.get(".col-introduced.header ").click();
    cy.url().should("contain", "desc");
  });

  it("sorting based on discontinued date", function () {
    //ascending order
    cy.log("ascending order");
    cy.get(".col-discontinued.header").click();
    cy.url().should("contain", "asc");

    //descending order
    cy.log("descending order");
    cy.get(".col-discontinued.header").click();
    cy.url().should("contain", "desc");
  });

  it("sorting based on company name", function () {
    //ascending order
    cy.log("ascending order");
    cy.get(".col-company a").click();
    cy.url().should("contain", "asc");

    //descending order
    cy.log("descending order");
    cy.get(".col-company a").click();
    cy.url().should("contain", "desc");
  });
});
