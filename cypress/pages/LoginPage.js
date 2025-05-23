export default class LoginPage {
getLoginForm(){
  return cy.get('#aspnetForm')
}

  getLoginForm() {
    return cy.get('#aspnetForm');
  }

  getUsernameInput() {
    return cy.get("#ctl00_MainContent_username");
  }

  getPasswordInput() {
    return cy.get("#ctl00_MainContent_password");
  }

  getLoginButton() {
    return cy.get("#ctl00_MainContent_login_button");
  }

  getErrorMessage() {
    return cy.get("#ctl00_MainContent_status");
  }

  // Reusable methods for login page
  enterUsername(username) {
    if(username) this.getUsernameInput().type(username);
  }

  enterPassword(password) {
    if(password) this.getPasswordInput().type(password);
  }

  clickOnLoginButton() {
    this.getLoginButton().click();
  }

  login(username, password, click = true) {   /// the is 3d parameter by default it's true
    this.enterUsername(username);
    
    if(click){
      this.enterPassword(password);
       this.clickOnLoginButton();  //// if click true click on login button
    } 
    else this.getPasswordInput().type(`${password}{enter}`);  //// if click true click on login button
       // if we provide in our code false it will come to this line and choolse enter 
  }


}






