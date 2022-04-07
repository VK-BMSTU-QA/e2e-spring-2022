import Page from './page';
import {URL} from '../../constants';

class SearchPage extends Page {
    public open() {
        return super.open('search');
    }

    public get notFoundPlaceholder() {
        return $('.search__content__not-found');
    }

    public get searchField() {
        return $('.topbar__search-input');
    }

    public get firstTrackArtist() {
        return $('.track__container__artist');
    }

    public async searchQuery(value: string) {
        await this.searchField.waitForDisplayed();
        await this.searchField.setValue(value);
    }

    public async getFirstTrackArtist(): Promise<string> {
        await this.firstTrackArtist.waitForDisplayed();
        return this.firstTrackArtist.getText();
    }

    public async hasNoResults(): Promise<boolean> {
        await this.notFoundPlaceholder.waitForDisplayed();
        return this.notFoundPlaceholder.isDisplayed();
    }

}

export default new SearchPage(URL);
