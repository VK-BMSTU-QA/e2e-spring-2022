import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
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


