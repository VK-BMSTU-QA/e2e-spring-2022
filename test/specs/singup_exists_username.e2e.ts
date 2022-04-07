import SignupPage from  '../pageobjects/signup.page';
import generate_string from '../utilits';
import * as assert from 'assert';

describe('Signup with exists username', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should display error about repeated username', async () => {
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

        await SignupPage.logout();

        assert.strictEqual(await SignupPage.checkAuthBlock(), true,  'Not logout user');

        await SignupPage.open();

        await SignupPage.signup(username, email, password);
        assert.strictEqual(await SignupPage.checkMainError(), true, 'No message about repeat username');
    });
});


