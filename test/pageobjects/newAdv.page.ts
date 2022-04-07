import Page from './page';

class NewAdvertPage extends Page {
    public get titleInput() {
        return $('.new-advert__name > .text-input__input');
    }

    public get mapsBlock() {
        return $('#YMapsID');
    }

    public get mapClickablePart() {
        return this.mapsBlock.$('ymaps').$('ymaps').$('ymaps').$('ymaps');
    }

    public get SubmitButton() {
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