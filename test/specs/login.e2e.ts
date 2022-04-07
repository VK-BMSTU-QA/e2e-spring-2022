import loginPage from  '../pageobjects/login.page';
import * as assert from 'assert';
import login from '../utils/login'


describe('Login with correct username and password', () => {
    beforeEach(() => {
        loginPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
        await login();
        const headerEmail = await loginPage.getEmail();

        assert.strictEqual(
          headerEmail,
          process.env.LOGIN,
          `Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });
});
