import $ from "webdriverio/build/commands/browser/$";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export class BasePage {
  get lnkSignIn() {
    return $$(".login")[0];
  }
  open() {
    return browser.url(`http://automationpractice.com/index.php`);
  }
  clickSignIn()
  {
      this.lnkSignIn.click();
  }
}
export default new BasePage();
