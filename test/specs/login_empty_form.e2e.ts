import LoginPage from '../pageobjects/login.page';
import * as assert from 'assert';

describe('Fail login', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should fail because form is empty', async () => {
        const expError = 'Введите логин и пароль';
        await LoginPage.open();
        
        await LoginPage.login ('', '');
        const receivedErr = await LoginPage.getError();

        assert.strictEqual(
          expError,
          receivedErr,
          `Полученная ошибка ${receivedErr} не соответствует ожидаемой ${expError}`,
        );
    });
});


