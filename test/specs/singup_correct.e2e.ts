import SignupPage from  '../pageobjects/signup.page';
import generate_string from '../utilits';
import * as assert from 'assert';


describe('Signup with correct username, email and password', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should signup with valid credentials', async () => {
        const username = generate_string(10);
        const email = generate_string(10) + '@mail.ru';
        const password = generate_string(10);

        await SignupPage.open();

        await SignupPage.signup(username, email, password);
        const headerUsername = await SignupPage.getUsername();

        assert.strictEqual(
            headerUsername,
            username,
            `Username зарегестрированного юзера ${headerUsername} не соответствует ожидаемому ${username}`,
        );
    });
});


