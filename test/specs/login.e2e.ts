import LoginPage from '../pageobjects/login.page';
import * as assert from 'assert';
import {authData} from '../utils/constants';

describe('Авторизация с корректным логином и паролем', () => {
    before(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('Проверка авторизации с корректными данными', async () => {
        await LoginPage.open();
        await LoginPage.login(authData.login, authData.password);

        const username = await LoginPage.getUserName();
        assert.strictEqual(
            username,
            authData.login,
            `Email авторизованного юзера ${username} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });
});


