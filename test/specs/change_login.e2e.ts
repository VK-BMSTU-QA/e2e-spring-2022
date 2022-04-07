import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';
import {authData, testChangeLogin} from '../utils/constants';
import LoginPage from '../pageobjects/login.page';

describe('Смена логина с корректным паролем', () => {
    before(async () => {
        ProfilePage.setWindowSize(1400, 1200);
        await LoginPage.open();
        await LoginPage.login(authData.login, authData.password);
        await LoginPage.waitForRedirect();
    });

    it('Логин в навбаре и инпуте должен совпадать,' +
        ' и быть такими же как логин введенный при авторизации', async () => {
        await ProfilePage.open();

        const usernameNavBar = await ProfilePage.getUserNameNavbar();
        assert.strictEqual(
            usernameNavBar,
            authData.login,
            `user name в navbar (${usernameNavBar}) не соответствует ожидаемому (${authData.login})`,
        );

        const userNameInput = await ProfilePage.getUserNameInput();
        assert.strictEqual(
            userNameInput,
            authData.login,
            `user name в input'e (${userNameInput}) не соответствует ожидаемому (${authData.login})`,
        );
    });

    it('После корректной смены login\'a, логин изменяется в навбаре и инпуте', async () => {
        await ProfilePage.open();
        await ProfilePage.changeLogin(testChangeLogin.new_login, authData.password);
        await ProfilePage.refresh();

        const usernameNavBar = await ProfilePage.getUserNameNavbar();
        assert.strictEqual(
            usernameNavBar,
            testChangeLogin.new_login,
            `user name в navbar (${usernameNavBar}) не соответствует ожидаемому (${testChangeLogin.new_login})`,
        );

        const userNameInput = await ProfilePage.getUserNameInput();
        assert.strictEqual(
            userNameInput,
            testChangeLogin.new_login,
            `user name в input'e (${userNameInput}) не соответствует ожидаемому (${testChangeLogin.new_login})`,
        );
    });

    after(async () => {
        /* Возвращаем старый логин */
        await ProfilePage.changeLogin(authData.login, authData.password);
    });
});


