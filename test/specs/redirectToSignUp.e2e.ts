import LoginPage from  '../pageobjects/login.page';
import SignUpPage from  '../pageobjects/signup.page';
import * as assert from 'assert';

describe('Redirect to signup', () => {
    const user = {
        name: 'Иван',
        surname: 'Иванов',
        email: `ivanivan${Math.random()*100}@mail.ru`,
        password: 'passswordpassword'
    };

    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('click on "Регистрация" button', async () => {
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