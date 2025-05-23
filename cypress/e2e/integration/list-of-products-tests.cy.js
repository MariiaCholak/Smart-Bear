


/// <reference types="cypress"/>

import LoginPage from "../../pages/LoginPage";
import ListOfProductsPage from "../../pages/ListOfProductsPage";

describe("List of products Verification @Regression", () => {
  const loginPage = new LoginPage();
  const listOfProductsPage = new ListOfProductsPage()

  beforeEach(() => {
    loginPage.login(Cypress.env("Test_USERNAME"), Cypress.env("PASSWORD"));
    listOfProductsPage.clickOnLeftPanelOption('View all products')
  });

  it('TG11S - T123 Validate "List of products table', () => {
   listOfProductsPage.getRows().should("have.length", 4);
    listOfProductsPage.getTableHeaders().should("have.length", 3);

     const expectedTableTexts = [
        ["Product name", "Price", "Discount"],
        ["MyMoney", "$100", "8%"],
        ["FamilyAlbum", "$80",  "15%"],
        ["ScreenSaver", "$20",  "10%"]
      ];


      listOfProductsPage.getRows().each((row, i) => {
        cy.wrap(row).children().each((cell, j) => {
          cy.wrap(cell).should('have.text', expectedTableTexts[i][j]);
        });
      }); 
  });
});