
class SavedPage {

    get savedSoftwareTitle() { return $('//h1[text()="Saved Software"]'); }
    get highlightedSavedLeftSidebar() { return $('a[data-test-id="saved-software-link"][aria-current="page"]'); }
    
}

module.exports = new SavedPage;