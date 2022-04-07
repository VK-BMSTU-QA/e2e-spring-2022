import RegistrationPage from  '../pageobjects/registration.page';
import * as assert from 'assert';

describe('Регистрации с логином уже существующего пользователя', () => {
    beforeEach(() => {
        RegistrationPage.setWindowSize(1400, 1200);
    });

    it('Появляется уведомление об ошибке "Пользователь уже существует"', async () => {
        await RegistrationPage.open();
        await RegistrationPage.registrate(process.env.AZOTLOGIN, '12345@mail.ru', process.env.AZOTPASSWORD, process.env.AZOTPASSWORD);
        const received = await RegistrationPage.waitForError();
        const expected = 'Пользователь уже существует';

        assert.strictEqual(
            received,
            expected,
          );

    });
});