///<reference types="Cypress" />

describe("Test Existing Computer", function () {
  it("View Details", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("tbody :nth-child(4) :nth-child(1) a").click();
  });

  it("Edit Details", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("tbody :nth-child(4) :nth-child(1) a").click();

    cy.get("#name").clear();

    cy.get("#name").type("Test_Computer");

    cy.get("#introduced").type("2020-08-20");

    cy.get("#discontinued").type("2021-08-20");

    cy.contains("Save this computer").click();

    cy.get(".alert-message").should("be.visible");
  });

  it("Delete Computer", function () {
    cy.visit("https://computer-database.gatling.io/computers");
    cy.get("tbody :nth-child(4) :nth-child(1) a").click();
    cy.get(".btn.danger").click({ force: true });
    cy.get(".alert-message").should("be.visible");
    cy.get(".alert-message").then(function (el) {
      const str = el.text();
      cy.log(str);
      expect(str).to.contain("deleted");
    });
  });
});
