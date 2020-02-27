
class WorkPage {

    get profileTitle() { return $('div[data-test-id="user-profile-island"]'); }
    get profileMenuBtn() { return $('div[class*="MenuToggle"]'); }
    get profileSettingsOption() { return $('li[data-test-id="cta-menuitem-profile"]'); }
    get dashboardOption() { return $('li[data-test-id="cta-menuitem-dashboard"]'); }
    get savedSoftwareOption() { return $('li[data-test-id="cta-menuitem-saved"]'); }
    get softwareUseOption() { return $('li[data-test-id="cta-menuitem-software-used"]'); }
    get highlightedDashboardLeftSidebar() { return $('a[data-test-id="dashboard-page-link"][aria-current="page"]'); }
    
    openUrl () {
        browser.maximizeWindow();
        browser.url(process.env.BASE_URL);   
    };


}

module.exports = new WorkPage;