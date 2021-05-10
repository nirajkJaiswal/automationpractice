import { BasePage } from "../index";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $$("#email")[0];
  }
  get inputPassword() {
    return $$("#passwd")[0];
  }
  get btnSubmit() {
    return $$("#SubmitLogin")[0];
  }
  get createAccountEmail() {
    return $$("#email_create");
  }
  get btnCreateAccount()
  {
    return $$('#SubmitCreate')[0];
  }
  login(username, password) {
    super.clickSignIn();
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  }
  register(email)
  {
    super.clickSignIn();
    this.createAccountEmail.setValue(email);
    this.btnCreateAccount.click();
  }
  open() {
    return super.open();
  }
}

export default new LoginPage();
