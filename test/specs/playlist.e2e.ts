
import * as assert from 'assert';
import PlaylistPage from '../pageobjects/playlist.page';
import LoginPage from '../pageobjects/login.page';

describe('Login with correct username and password', () => {
    beforeEach(async () => {
        LoginPage.setWindowSize(1400, 1200);
        PlaylistPage.setWindowSize(1400, 1200);
        await LoginPage.open();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
    });

    it('should change playlist name with valid name', async () => {
        const newName = 'TEStt playlist';

        await PlaylistPage.open();
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
