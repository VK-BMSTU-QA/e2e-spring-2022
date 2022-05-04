import Page from './page';
import {URL} from '../../constants';

class PlayerPage extends Page {
    public get player() {
        return $('#player');
    }

    public get playerTrackTitle() {
        return $('#track-name');
    }

    public get playerArtistName() {
        return $('#artist-name');
    }

    public async getPlayerTrackTitle() {
        await this.playerTrackTitle.waitForDisplayed();
        return this.playerTrackTitle.getText();
    }

    public async getPlayerArtistName() {
        await this.playerArtistName.waitForDisplayed();
        return this.playerArtistName.getText();
    }
}

export default new PlayerPage(URL);
