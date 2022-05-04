
import * as assert from 'assert';
import PlaylistPage from '../pageobjects/playlist.page';
import LoginPage from '../pageobjects/login.page';
import {screenHeight, screenWidth} from '../../constants';

describe('Playlist functionality', () => {
    beforeEach(async () => {
        LoginPage.setWindowSize(screenWidth, screenHeight);
        PlaylistPage.setWindowSize(screenWidth, screenHeight);
    });

    it('Should change playlist name with valid name', async () => {
        const newName = 'TEStt playlist';
        const playlistId = 198;

        LoginPage.open();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);

        PlaylistPage.open(playlistId.toString());
        await PlaylistPage.openEditMenu();
        await PlaylistPage.updatePlaylistName(newName);
        await PlaylistPage.closeEditMenu();
        const name = await PlaylistPage.getPlaylistName();

        assert.strictEqual(
            newName,
            name,
            `The name of playlist being updated ${name} does not match the expected ${newName}`,
        );
    });
});
