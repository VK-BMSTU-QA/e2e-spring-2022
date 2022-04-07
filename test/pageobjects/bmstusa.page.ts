import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class BmstusaPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get headerAvatar() {
        return $('#header-avatar');
    }

    public get popupUserblock() {
        return $('.user-popup-userblock');
    }

    public get logoutButton() {
        return $('#header-logout');
    }

    public async openUserPopup () {
        await this.headerAvatar.waitForDisplayed();
        await this.headerAvatar.click();
    }

    public async logout() {
        await this.openUserPopup();
        await this.logoutButton.waitForDisplayed();
        await this.logoutButton.click();
    }

    public async goToProfile() {
        await this.openUserPopup();
        await this.popupUserblock.click();
    }

    
}
