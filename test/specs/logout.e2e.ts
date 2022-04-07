import mainPage from  '../pageobjects/main.page';
import * as assert from 'assert';
import login from '../utils/login'


describe('Logout check', () => {
    beforeEach( async () => {
        mainPage.setWindowSize(1400, 1200);
    });

    it('should logout immediately correctly', async () => {
        await login();
        await mainPage.open();
        await mainPage.logout();
        const logged = await mainPage.isLoggedIn();

        assert.strictEqual(
          logged,
          false,
          `Пользователь все еще залогинен`,
        );
    });
});
