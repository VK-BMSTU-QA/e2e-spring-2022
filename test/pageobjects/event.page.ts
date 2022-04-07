import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EventPage extends Page {
    /**
     * define selectors using getter methods
     */

     public get addFavouriteButton () {
        return $('#addFavourite');
     }

     public get removeFavouriteButton () {
        return $('#removeFavourite');
     }

     public get tag () {
         return $('.event-tags-block__event-tag')
     }

    public async addToFavourite () {
        await this.addFavouriteButton.waitForClickable();
        await this.addFavouriteButton.click();
        await this.removeFavouriteButton.waitForClickable();
    }

    public async getTag () {
        await this.tag.waitForDisplayed();
        return this.tag.getText();
    }

    public open (href) {
        return super.open(href);
    }
}

export default new EventPage('https://bmstusa.ru');
