import LoginPage from '../pageobjects/login.page';
import {screenHeight, screenWidth} from '../../constants';
import MainPage from '../pageobjects/main.page';
import * as assert from 'assert';

describe('Play first track from "Albums" section', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(screenWidth, screenHeight);
    });

    it('Plays first track from the first album', async () => {
        LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);

        MainPage.open();

        await MainPage.albums.playFirstAlbum();

        const playerArtist = await MainPage.player.getPlayerArtistName();
        const playerTitle = await MainPage.player.getPlayerTrackTitle();

        await MainPage.albums.openFirstAlbum();

        const artistName = await MainPage.tracks.getFirstTrackArtist();
        const trackTitle = await MainPage.tracks.getFirstTrackTitle();

        assert.strictEqual(trackTitle, playerTitle,
            `Воспроизводимый трек ${playerTitle} не соответствует первому треку ${trackTitle}`);
        assert.strictEqual(artistName, playerArtist,
            `Исполнитель ${playerArtist} не соответствует исполнителю первого трека ${artistName}`);
    });
});
