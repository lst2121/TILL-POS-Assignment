///<reference types="Cypress" />

describe("Filter Computer", function () {
  it("Filter by entering full name", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#searchbox").type("Power Macintosh G3");
    cy.get("#searchsubmit").click();
    cy.get("tbody tr td a").should("contain", "Power Macintosh G3");

    cy.get("#main h1").then(function (el) {
      const str = el.text();
      var res = str.split(" ");
      res = res[0].trim();
      const text = res + " computers found";
      cy.log(text);
      expect(str).to.contain(text);
    });
  });

  it("Filter by entering Partial name", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#searchbox").type("mac");
    cy.get("#searchsubmit").click();
    cy.get("tbody tr td a").should("contain", "mac");

    cy.get("#main h1").then(function (el) {
      const str = el.text();
      var res = str.split(" ");
      res = res[0].trim();
      const text = res + " computers found";
      cy.log(text);
      expect(str).to.contain(text);
      //expect(str).to.contain("computers found");
    });
  });

  it("Filter by entering wrong compter name", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#searchbox").type("Invalid Name");
    cy.get("#searchsubmit").click();
    cy.get(".well em").should("contain", "Nothing to display");
    cy.get("#main h1").then(function (el) {
      const str = el.text();
      expect(str).to.contain("No computer");
    });
  });
});
