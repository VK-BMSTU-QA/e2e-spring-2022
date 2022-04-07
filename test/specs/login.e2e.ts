import LoginPage from '../pageobjects/login.page';
import * as assert from 'assert';

describe('Авторизация с корректным логином и паролем', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        const username = await LoginPage.getUserName();

        assert.strictEqual(
            username,
            process.env.LOGIN,
            `Email авторизованного юзера ${username} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });
});


