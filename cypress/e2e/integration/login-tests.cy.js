/// <reference types="cypress"/>
import BasePage from "../../pages/BasePage";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();
  const basePage = new BasePage();

describe("Login Verification", () => {
 
  beforeEach(() => {
    cy.visit(Cypress.env("APP_BASE_URL"));
  });

  it("TG11S-T131 - Validate login with valid credentials", () => {
    cy.visit(Cypress.env("APP_BASE_URL"));

    loginPage.login(Cypress.env("TEST_USERNAME"), Cypress.env("PASSWORD"));

    cy.url().should("include", "weborders");

    basePage.getWebOrdersHeading().should("have.text", "Web Orders");
    basePage.getLogoutButton().should("have.text", "Logout");
    basePage.getWelcomeUserInfo().should("include.text", Cypress.env("TEST_USERNAME"));
  });

  it("TG11S-T142 - Validate logout", () => {
    cy.visit(Cypress.env("APP_BASE_URL"));
    loginPage.login(Cypress.env("TEST_USERNAME"), Cypress.env("PASSWORD"));
    basePage.getLogoutButton().click();
    cy.url().should("include", "Login");
    loginPage.getLoginForm().should("be.visible");
  });

  [
    {
      title: "emptyUsernameAndPassword",
      username: "",
      password: "",
    },
    {
      title: 'invalidUsernameValidPassword',
      username: "InvalidUsername",
      password: Cypress.env("PASSWORD"),
    },
    {
      title: 'invalidUsernameValidPassword',
      username: Cypress.env("TEST_USERNAME"),
      password: "InvalidPassword",
    },
    {
      title: 'invalidUsernameValidPassword',
      username: "InvalidUsername",
      password: "InvalidPassword",
    },
  ].forEach((creds) => {
    it(`TG11S-T164 - Validate login with invalid credentials ${creds.title}`, () => {
       loginPage.login(creds.username, creds.password);

      cy.url().should("include", "login");
      loginPage.getErrorMessage().should('have.text', 'Invalid Login or Password.');
    });
  });
});

describe('Login Verification - Additional Tests @Smoke', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("APP_BASE_URL"));
  });

  it('TG11S-T175 - Validate the password input is masked', () => {
    loginPage.getPasswordInput().should('have.attr', 'type', 'password');
  });


    it('TG11S-T168 - Validate login with valid credentials and ENTER', () => {
    loginPage.login(Cypress.env("TEST_USERNAME"), Cypress.env("PASSWORD"), false);

    cy.url().should("include", "weborders");

    basePage.getWebOrdersHeading().should("have.text", "Web Orders");
    basePage.getLogoutButton().should("have.text", "Logout");
    basePage
      .getWelcomeUserInfo()
      .should("include.text", Cypress.env("TEST_USERNAME"));
  });
})



