import Page from './page';

class NewAdvertPage extends Page {
    private get titleInput() {
        return $('.new-advert__name > .text-input__input');
    }

    private get mapsBlock() {
        return $('#YMapsID');
    }

    private get mapClickablePart() {
        return this.mapsBlock.$('ymaps').$('ymaps').$('ymaps').$('ymaps');
    }

    private get SubmitButton() {
        return $('#newAdForm');
    }

    public async publishAdvert(title: string) {
        await this.titleInput.waitForDisplayed();
        await this.titleInput.setValue(title);

        await this.mapClickablePart.waitForClickable();
        await this.mapClickablePart.click();

        await this.SubmitButton.waitForClickable();
        await this.SubmitButton.click();
    }

    public open(): Promise<string> {
        return super.open('newAd');
    }
}

export default new NewAdvertPage('https://volchock.ru');