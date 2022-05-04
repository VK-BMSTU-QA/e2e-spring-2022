import Page from './page';
import {URL} from '../../constants';

class TracksPage extends Page {
    public get firstPlayButton() {
        return $('.track-play');
    }

    public get firstTrackTitle() {
        return $('.track__container__name');
    }

    public get firstTrackArtist() {
        return $('.track__container__artist');
    }

    public async getFirstTrackArtist() {
        await this.firstTrackArtist.waitForDisplayed();
        return this.firstTrackArtist.getText();
    }

    public async getFirstTrackTitle() {
        await this.firstTrackTitle.waitForDisplayed();
        return this.firstTrackTitle.getText();
    }


}

export default new TracksPage(URL);
