
class ProfilePage {

    get profileSettingsTitle() { return $('//h1[text()="Profile & Settings"]'); }
    get highlightedProfileLeftSidebar() { return $('a[data-test-id="profile-page-link"][aria-current="page"]'); }
    
}

module.exports = new ProfilePage;