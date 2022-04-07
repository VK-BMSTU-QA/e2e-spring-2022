import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Авторизация с логином несуществующего пользователя', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('Появляется уведомление об ошибке "Пользователя не существует"', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.AZOTLOGIN+'qwerty12345', process.env.AZOTPASSWORD);
        const received = await LoginPage.waitForError();
        const expected = 'Пользователя не существует';

        assert.strictEqual(
            received,
            expected,
          );

    });
});


