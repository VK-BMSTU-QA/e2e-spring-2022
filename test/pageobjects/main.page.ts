import Page from './page';
import {URL} from '../../constants';
import PlayerPage from './player.page';
import AlbumsPage from './albums.page';
import TracksPage from './tracks.page';

class MainPage extends Page {
    public albums = AlbumsPage;
    public player = PlayerPage;
    public tracks = TracksPage;

    public open() {
        return super.open('');
    }


    public async playFirstTrack() {
        await this.tracks.firstPlayButton.waitForDisplayed();
        await this.tracks.firstPlayButton.click();

        await this.player.player.waitForDisplayed();
    }
}

export default new MainPage(URL);
