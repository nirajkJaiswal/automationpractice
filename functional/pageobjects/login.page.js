import { BasePage } from "../index";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#username");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  login(username, password) {
    super.clickSignIn();
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {    
    return super.open();
  }
}

export default new LoginPage();
