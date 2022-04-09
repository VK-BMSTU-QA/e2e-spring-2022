
import * as assert from 'assert';
import PlaylistPage from '../pageobjects/playlist.page';
import LoginPage from '../pageobjects/login.page';
import {screenHeight, screenWidth} from '../../constants';

describe('Login with correct username and password', () => {
    beforeEach(async () => {
        LoginPage.setWindowSize(screenWidth, screenHeight);
        PlaylistPage.setWindowSize(screenWidth, screenHeight);
    });

    it('should change playlist name with valid name', async () => {
        const newName = 'TEStt playlist';

        LoginPage.open();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);

        PlaylistPage.open();
        await PlaylistPage.openEditMenu();
        await PlaylistPage.updatePlaylistName(newName);
        await PlaylistPage.closeEditMenu();
        const name = await PlaylistPage.getPlaylistName();

        assert.strictEqual(
            newName,
            name,
            `Name обновленного плейлиста ${name} не соответствует ожидаемому ${newName}`,
        );
    });
});
