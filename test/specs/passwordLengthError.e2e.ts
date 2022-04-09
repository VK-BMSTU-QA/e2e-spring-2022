import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';

describe('Валидация длины пароля', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('пароль короче 8 символов должен вызвать ошибку', async () => {
        await LoginPage.openLogin();
        const shortPassword = '123';

        await LoginPage.login(process.env.LOGIN, shortPassword);
        const resultError = await LoginPage.getPasswordError();
        const expectedError = 'Пароль не может быть короче 8 символов';

        assert.strictEqual(
            resultError,
            expectedError,
            `Не появилась ошибка с текстом ${expectedError}`,
        );
    });
});