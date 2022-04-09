import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
        const wantLogin = process.env.LOGIN.split('@')[0];
       
        await LoginPage.open();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        const headerEmail = await LoginPage.getEmail();

        assert.strictEqual(
          headerEmail,
          wantLogin,
          `Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });
});


