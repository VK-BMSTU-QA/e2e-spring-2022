import Page from './page';
import {URL} from '../../constants';

class AlbumsPage extends Page {
    public get firstAlbumPlayButton() {
        return $('.top-album__play');
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
}

export default new AlbumsPage(URL);
