import Page from './page';
import {URL} from '../../constants';

class MainPage extends Page {
    public get firstAlbumPlayButton() {
        return $('.top-album__play');
    }

    public get firstPlayButton() {
        return $('.track-play');
    }

    public get firstTrackTitle() {
        return $('.track__container__name');
    }

    public get firstTrackArtist() {
        return $('.track__container__artist');
    }

    public get player() {
        return $('#player');
    }

    public get playerTrackTitle() {
        return $('#track-name');
    }

    public get playerArtistName() {
        return $('#artist-name');
    }

    public get firstAlbum() {
        return $('.top-album');
    }

    public get albumArt() {
        return $('.album');
    }

    public async playFirstAlbum() {
        await this.firstAlbumPlayButton.waitForDisplayed();
        await this.firstAlbumPlayButton.click();
    }

    public async openFirstAlbum() {
        await this.firstAlbum.waitForDisplayed();
        await this.firstAlbum.click();
        await this.albumArt.waitForDisplayed();
    }


    public open() {
        return super.open('');
    }

    public async getFirstTrackArtist() {
        await this.firstTrackArtist.waitForDisplayed();
        return this.firstTrackArtist.getText();
    }

    public async getFirstTrackTitle() {
        await this.firstTrackTitle.waitForDisplayed();
        return this.firstTrackTitle.getText();
    }

    public async getPlayerTrackTitle() {
        await this.playerTrackTitle.waitForDisplayed();
        return this.playerTrackTitle.getText();
    }

    public async getPlayerArtistName() {
        await this.playerArtistName.waitForDisplayed();
        return this.playerArtistName.getText();
    }

    public async playFirstTrack() {
        await this.firstPlayButton.waitForDisplayed();
        await this.firstPlayButton.click();

        await this.player.waitForDisplayed();
    }
}

export default new MainPage(URL);
