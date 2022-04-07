import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Fail login', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should fail because password is invalid', async () => {
        let expError = "Неправильный логин и/или пароль";
        let password = "123";

        await LoginPage.open();
        
        await LoginPage.login(process.env.LOGIN, password);
        const receivedErr = await LoginPage.getError();

        assert.strictEqual(
          expError,
          receivedErr,
          `Полученная ошибка ${receivedErr} не соответствует ожидаемой ${expError}`,
        );
    });
});


