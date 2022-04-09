import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Вход с корректным email и паролем', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('вход с действительными учетными данными', async () => {
        await LoginPage.openMain();
        await LoginPage.openLogin();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await LoginPage.openMain();
        const email = await LoginPage.getUserEmail();

        assert.strictEqual(
          email,
          process.env.LOGIN,
          `Email авторизованного юзера ${email} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });
});


