import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */

     public get authHeaderBtn () {
        return $('.header__auth-anchor');
     }

    //header__auth-anchor

    public get userAvatarBtn () {
        return $('#header-avatar');
    }

    public get userPopup () {
        return $('.user-popup');
    }

    public get userEmail () {
        return $('.user-popup-userblock-email');
    }

    public async getEmail () {
        await this.userAvatarBtn.click();
        await this.userPopup.waitForDisplayed();
        await this.userEmail.waitForDisplayed();
        return this.userEmail.getText();
    }

    public openLogin () {
        return super.open('login')
    }

    public open () {
        return super.open('');
    }
}

export default new MainPage('https://bmstusa.ru');
