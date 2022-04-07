import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';
import {authData, testAvatarChange} from '../utils/constants';
import LoginPage from '../pageobjects/login.page';

describe('Не корректная попытка смены аватара', () => {
    before(async () => {
        ProfilePage.setWindowSize(1400, 1200);
        await LoginPage.open();
        await LoginPage.login(authData.login, authData.password);
        await LoginPage.waitForRedirect();
    });

    it('Размер загружаемого аватара не должен превыщать 500КБ', async () => {
        await ProfilePage.open();
        await ProfilePage.uploadAvatar(testAvatarChange.image);

        const isAvatarErrorExisting = await ProfilePage.isAvatarErrorExisting();
        assert.ok(isAvatarErrorExisting, 'Сообщение о не корректном размере аватара не вывелось');
    });
});


