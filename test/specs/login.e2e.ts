import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        const headerLogin = await LoginPage.getLogin();

        assert.strictEqual(
          headerLogin,
          process.env.LOGIN,
          `Login авторизованного юзера ${headerLogin} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });
});
