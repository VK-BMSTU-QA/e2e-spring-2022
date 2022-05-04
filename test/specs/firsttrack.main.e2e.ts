import LoginPage from '../pageobjects/login.page';
import * as assert from 'assert';
import {screenHeight, screenWidth} from '../../constants';
import MainPage from '../pageobjects/main.page';

describe('Play first track from "Suggested tracks" section', () => {
    beforeEach(async () => {
        LoginPage.setWindowSize(screenWidth, screenHeight);

        LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);

        MainPage.open();
    });

    it('Plays first track', async () => {
        const trackTitle = await MainPage.tracks.getFirstTrackTitle();
        const artistName = await MainPage.tracks.getFirstTrackArtist();

        await MainPage.playFirstTrack();

        const playerTitle = await MainPage.player.getPlayerTrackTitle();
        const playerArtist = await MainPage.player.getPlayerArtistName();

        assert.strictEqual(trackTitle, playerTitle,
            `Воспроизводимый трек ${playerTitle} не соответствует первому треку ${trackTitle}`);
        assert.strictEqual(artistName, playerArtist,
            `Исполнитель ${playerArtist} не соответствует исполнителю первого трека ${artistName}`);
    });
});
