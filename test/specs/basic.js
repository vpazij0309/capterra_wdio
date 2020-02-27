const assert = require('assert');
require('dotenv').config();
const loginPage = require('../../pages/login.po');
const workPage = require('../../pages/workspace.po');
const profilePage = require('../../pages/profile.po');
const savedPage = require('../../pages/saved.po');
const softwareUsedPage = require('../../pages/software-used.po');

describe('checking some functionality', () => {
    it('should have the right title', () => {
        loginPage.openUrl();
        const title = browser.getTitle();
        assert.strictEqual(title, process.env.TITLE);
    });

    it('login. empty credentials errors', () => {
        loginPage.authenticBtn.click();
        loginPage.logInBtn.click();
        loginPage.submitBtn.click();
        assert.equal(loginPage.validationError.isDisplayed(), true);
    });

    it('login successfully', () => {
        loginPage.logIn(process.env.AUTH0_USERNAME, process.env.AUTH0_PASSWORD);
        assert.equal(workPage.profileTitle.isDisplayed(), true);
    });

    it('Profile & Settings page opens', () => {
        workPage.profileMenuBtn.click();
        workPage.profileSettingsOption.click()
        assert.equal(profilePage.profileSettingsTitle.isDisplayed(), true);
        assert.equal(profilePage.highlightedProfileLeftSidebar.isDisplayed(), true);
    });

    it('Dashboard page opens', () => {
        workPage.profileMenuBtn.click();
        workPage.dashboardOption.click()
        //browser.pause(2000);
        workPage.profileTitle.waitForDisplayed(2000);
        assert.equal(workPage.profileTitle.isDisplayed(), true);
        assert.equal(workPage.highlightedDashboardLeftSidebar.isDisplayed(), true);
    });
    
    it('Saved Software page opens', () => {
        workPage.profileMenuBtn.click();
        workPage.savedSoftwareOption.click()
        savedPage.savedSoftwareTitle.waitForDisplayed(2000);
        assert.equal(savedPage.savedSoftwareTitle.isDisplayed(), true);
        assert.equal(savedPage.highlightedSavedLeftSidebar.isDisplayed(), true);
    });

    it('Software | Use page opens', () => {
        workPage.profileMenuBtn.click();
        workPage.softwareUseOption.click()
        softwareUsedPage.softwareUsedTitle.waitForDisplayed(2000);
        assert.equal(softwareUsedPage.softwareUsedTitle.isDisplayed(), true);
        assert.equal(softwareUsedPage.highlightedSoftwareUsedLeftSidebar.isDisplayed(), true);
    });
    
})