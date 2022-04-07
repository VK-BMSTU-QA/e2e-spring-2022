import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Password length error', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('empty password', async () => {
        await LoginPage.openLogin();

        await LoginPage.loginWithShortPassword(process.env.LOGIN);
        const resultError = await LoginPage.getPasswordError();
        const expectedError = 'Пароль не может быть короче 8 символов';

        assert.strictEqual(
            resultError,
            expectedError,
            `Не появилась ошибка с текстом ${expectedError}`,
        );
    });
});