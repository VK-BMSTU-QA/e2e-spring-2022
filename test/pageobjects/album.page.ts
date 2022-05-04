import Page from './page';
import {URL} from '../../constants';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlbumPage extends Page {

    public getTrackFavorBtn(trackId: number) {
        return $(`img.track-fav[data-id="${trackId}"]`);
    }

    public async favorTrack(trackId: number) {
        await this.getTrackFavorBtn(trackId).waitForClickable();
        await this.getTrackFavorBtn(trackId).click();
    }

    public open (path: string) {
        return super.open(`album/${path}`);
    }
}

export default new AlbumPage(URL);
