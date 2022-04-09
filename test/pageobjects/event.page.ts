import waitForDisplayed from '../../node_modules/webdriverio/build/commands/element/waitForDisplayed';
import Page from './page';

class EventPage extends Page {

    public get eventCategory () {
        return $('[class="secondary-text category"]');
    }

    public async getCategory () {
        await this.eventCategory.waitForDisplayed();
        return this.eventCategory.getText();
    }
}

export default new EventPage('https://bmstusa.ru');



