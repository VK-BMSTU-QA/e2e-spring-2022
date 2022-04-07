import LoginPage from '../pageobjects/login.page';
import * as assert from 'assert';
import {screenHeight, screenWidth} from '../../constants';
import MainPage from '../pageobjects/main.page';

describe('Play first track from "Suggested tracks" section', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(screenWidth, screenHeight);
        MainPage.setWindowSize(screenWidth, screenHeight);
    });

    it('Plays first track', async () => {
        LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);

        MainPage.open();

        const trackTitle = await MainPage.getFirstTrackTitle();
        const artistName = await MainPage.getFirstTrackArtist();

        await MainPage.playFirstTrack();

        const playerTitle = await MainPage.getPlayerTrackTitle();
        const playerArtist = await MainPage.getPlayerArtistName();

        assert.strictEqual(trackTitle, playerTitle,
            `Воспроизводимый трек ${playerTitle} не соответствует первому треку ${trackTitle}`);
        assert.strictEqual(artistName, playerArtist,
            `Исполнитель ${playerArtist} не соответствует исполнителю первого трека ${artistName}`);
    });
});
