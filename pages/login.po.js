const workPage = require('../pages/workspace.po');

class LoginPage {

    get authenticBtn() { return $('button[class*="AuthCtaDesktop"]'); }
    get logInBtn() { return $('ul[class*="CtaMenu"] li:nth-child(1) button'); }
    get userInput() { return $('input[data-test-id="login-email-address"]'); }
    get passwordInput() { return $('input[data-test-id="login-password"]'); }
    get submitBtn() { return $('button[data-test-id="login-submit-button"]'); }
    get validationError() { return $('div[class*="NegativeHelperMargin"]'); }

    openUrl () {
        browser.maximizeWindow();
        browser.url(process.env.BASE_URL);   
    };

    logIn (login, passport) {
        //this.authenticBtn.click();
        //this.logInBtn.click();
        this.userInput.setValue(login);
        this.passwordInput.setValue(passport);
        this.submitBtn.click();
        workPage.profileTitle.waitForDisplayed(15000);
    }
}

module.exports = new LoginPage;