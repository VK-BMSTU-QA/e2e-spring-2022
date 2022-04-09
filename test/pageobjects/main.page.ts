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

    public get tagField () {
        return $('#filter-tag-input');
    }

    public get addTagBtn () {
        return $('#tags-search-img');
    }

    public get tag () {
        return $('.tag_delitable')
    }

    public async getEventCardHref () {
        return $('.event-board-event').$('.event-anchor').getAttribute('href')
    }

    public async getFavouriteEventId() {
        return $('.event-img-overlay__item_selected').getAttribute('data-fav')
    }

    public async getEmail () {
        await this.userAvatarBtn.click();
        await this.userPopup.waitForDisplayed();
        await this.userEmail.waitForDisplayed();
        return this.userEmail.getText();
    }

    public async addTag (tag : string) {
        await this.tagField.waitForDisplayed();
        await this.tagField.setValue(tag);
        await this.addTagBtn.waitForClickable();
        await this.addTagBtn.click();
        await this.tag.waitForDisplayed();
    }

    public openLogin () {
        return super.open('login')
    }

    public open () {
        return super.open('');
    }
}

export default new MainPage('https://bmstusa.ru');
