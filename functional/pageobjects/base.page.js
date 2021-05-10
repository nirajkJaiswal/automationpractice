import $ from "webdriverio/build/commands/browser/$";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export class BasePage {
  get lnkSignIn() {
    return $("[title='Log in to your customer account']");
  }
  get inputUsername() {
    return $("#username");
  }
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open() {
    return browser.url(`http://automationpractice.com/index.php`);
  }
  clickSignIn()
  {
      this.lnkSignIn.click();
  }
}
export default new BasePage();
