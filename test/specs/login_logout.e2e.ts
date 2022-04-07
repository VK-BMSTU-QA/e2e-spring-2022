import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';

import * as assert from 'assert';

describe('Login and logout from account', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('after logout should open login page instead of a profile', async () => {
        let expectPageName = "Вход";
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        const headerEmail = await LoginPage.getEmail();

        assert.strictEqual(
          headerEmail,
          process.env.LOGIN.split("@")[0],
          `Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${process.env.LOGIN}`,
        );

        await ProfilePage.logout();

        let pageName = await LoginPage.getPageName();
        assert.strictEqual(
            pageName,
            expectPageName,
            `Полученная страница ${pageName} не соответствует ожидаемому ${expectPageName}`,
          );
        
    });
});


