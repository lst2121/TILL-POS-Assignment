///<reference types="Cypress" />

describe("my test suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://computer-database.gatling.io/computers");
    // var list = [];
    // cy.get("tbody tr td :nth-child(1)").each(($el) => {
    //   list.push($el.text());
    //   cy.log($el.text());
    // });
    // for (let i = 0; i < list.length, i++; ) {
    //   cy.log(list(i));
    // }
    //cy.get("tbody tr td").eq(0);
    cy.contains("td", "Discontinued");
  });
});
