import LoginPage from  '../pageobjects/login.page';
import SignUpPage from  '../pageobjects/signup.page';
import * as assert from 'assert';

describe('Переход на страницу регистрации со страницы входа', () => {
    const user = {
        name: 'Иван',
        surname: 'Иванов',
        email: `ivanivan${Math.random()*100}@mail.ru`,
        password: 'passswordpassword'
    };

    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('нажатие на кнопку "Регистрация" и создание профиля', async () => {
        await LoginPage.openLogin();

        await LoginPage.redirectToSignUp();
        await SignUpPage.signUp(user);

        const email = await SignUpPage.getUserEmail();

        assert.strictEqual(
            email,
            user.email,
            `Email авторизованного юзера ${email} не соответствует ожидаемому ${user.email}`,
        );
    });
});