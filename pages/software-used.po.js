
class SoftwareUsedPage {

    get softwareUsedTitle() { return $('//h1[text()="Software Used"]'); }
    get highlightedSoftwareUsedLeftSidebar() { return $('a[data-test-id="software-used-link"][aria-current="page"]'); }
    
}

module.exports = new SoftwareUsedPage;