import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';
import {authData, testChangeEmail} from '../utils/constants';
import LoginPage from '../pageobjects/login.page';

describe('Не корректная смена email', () => {

    before(async () => {
        ProfilePage.setWindowSize(1400, 1200);
        await LoginPage.open();
        await LoginPage.login(authData.login, authData.password);
        await LoginPage.waitForRedirect();
    });

    it('Не корректная попытка смены email', async () => {
        await ProfilePage.open();
        await ProfilePage.changeEmail(testChangeEmail.email_error, authData.password);

        const isInputErrorExisting = await ProfilePage.isInputErrorExisting();
        assert.ok(isInputErrorExisting, 'Сообщение о не корректном email не вывелось');
    });

});


