///<reference types="Cypress" />

describe("Add New Computer", function () {
  it("Add a new computer_valid_data", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#add").click();

    cy.get("#name").type("Test_Computer");

    cy.get("#introduced").type("2020-08-20");

    cy.get("#discontinued").type("2021-08-20");

    cy.get("#company").select("IBM");

    cy.contains("Create this computer").click();

    cy.get(".alert-message").should("be.visible");
  });

  it("Add new computer_invalid date", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#add").click();

    cy.get("#name").type("Test_Computer");

    cy.get("#introduced").type("2020-12-35");

    cy.get("#discontinued").type("2021-08-20");

    cy.get("#company").select("IBM");

    cy.contains("Create this computer").click();
    cy.get(".clearfix")
      .eq(1)
      .find(".help-inline")
      .should("contain", "Failed to decode date");
  });

  it("Add new computer_without_Computer_Name", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#add").click();
    cy.contains("Create this computer").click();
    cy.get(".clearfix")
      .eq(0)
      .find(".help-inline")
      .should("contain", "Failed to refine type");
  });

  it("Add a new computer_Entering_Only_Required_Value", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#add").click();

    cy.get("#name").type("Test_Computer");

    cy.contains("Create this computer").click();

    cy.get(".alert-message").should("be.visible");
    // cy.get(".alert-message").then(function (el) {
    //   const text = el.text();
    //   cy.log(text);
    //   //   expect(txt).to.contain;
    //   //   el.text().should("contain", "Test_Computer");
    //   //el.text().should("eq", "Done ! Computer Test_Computer has been created");
    //   expect(text).to.have.text(
    //     "Done ! Computer Test_computer has been created"
    //   );
    // });
  });

  it("Cancel_Button_Functionality", function () {
    cy.visit("https://computer-database.gatling.io/computers");

    cy.get("#add").click();

    cy.get("#name").type("Test_Computer");
    cy.get(".actions").find(".btn").eq(1).click();
    cy.url().should("eq", "https://computer-database.gatling.io/computers");
  });
});
