
import * as assert from 'assert';
import LoginPage from '../pageobjects/login.page';
import AlbumPage from '../pageobjects/album.page';
import FavoritesPage from '../pageobjects/favorites.page';
import {screenHeight, screenWidth} from '../../constants';

describe('Login with correct username and password', () => {
    beforeEach(async () => {
        LoginPage.setWindowSize(screenWidth, screenHeight);
        AlbumPage.setWindowSize(screenWidth, screenHeight);
        FavoritesPage.setWindowSize(screenWidth, screenHeight);
    });

    it('should add favor track to favorites page', async () => {
        const trackId = 4271;

        LoginPage.open();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);

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
