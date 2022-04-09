
import * as assert from 'assert';
import LoginPage from '../pageobjects/login.page';
import AlbumPage from '../pageobjects/album.page';
import FavoritesPage from '../pageobjects/favorites.page';

describe('Login with correct username and password', () => {
    beforeEach(async () => {
        LoginPage.setWindowSize(1400, 1200);
        AlbumPage.setWindowSize(1400, 1200);
        FavoritesPage.setWindowSize(1400, 1200);
        LoginPage.open();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
    });

    it('should add favor track to favorites page', async () => {
        const trackId = 4271;

        AlbumPage.open();
        await AlbumPage.favorTrack(trackId);

        FavoritesPage.open();
        const track = await FavoritesPage.getTrack(trackId);

        assert.notEqual(
            track,
            null,
            `Трек ${trackId} не добавился на страницу избранного`,
        );
    });
});
