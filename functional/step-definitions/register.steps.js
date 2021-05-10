import { Given, When, Then, LoginPage,SecurePage} from '../index';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
     pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (email) => {
     LoginPage.login(email)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
     expect(SecurePage.flashAlert).toBeExisting();
     expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

