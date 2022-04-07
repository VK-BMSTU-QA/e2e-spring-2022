import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);

        await ProfilePage.open();

        const email = await ProfilePage.getEmail();

        assert.strictEqual(
          email,
          process.env.LOGIN,
          `Email авторизованного юзера ${email} не соответствует ожидаемому ${process.env.LOGIN}`,
        );
    });


});


