import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';
import {authData, testChangeEmail} from '../utils/constants';
import LoginPage from '../pageobjects/login.page';

describe('Корректная смена логина', () => {
    let email;

    before(async () => {
        ProfilePage.setWindowSize(1400, 1200);
        await LoginPage.open();
        await LoginPage.login(authData.login, authData.password);
        await LoginPage.waitForRedirect();
        await ProfilePage.open();
        email = await ProfilePage.getEmail();
    });

    it('Смена email', async () => {
        await ProfilePage.open();
        await ProfilePage.changeEmail(testChangeEmail.email_ok, authData.password);
        await ProfilePage.refresh();

        const newEmail = await ProfilePage.getEmail();
        assert.strictEqual(newEmail, testChangeEmail.email_ok,
            `текущий email (${newEmail}) не соответствует ожидаему (${testChangeEmail.email_ok})`);
    });

    after(async () => {
        /* Возвращаем старый email */
        await ProfilePage.changeEmail(email, authData.password);
    });
});


