import MainPage from '../pageobjects/main.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        MainPage.setWindowSize(1400, 1200);
    });

    it('should login with valid credentials', async () => {
        await MainPage.open();
        await MainPage.login(process.env.LOGIN, process.env.PASSWORD);
        const username = await MainPage.getUsername();

        assert.strictEqual(
          username,
          process.env.USERNAME,
          `Юзернейм авторизованного юзера ${username} не соответствует ожидаемому ${process.env.USERNAME}`,
        );
    });
});