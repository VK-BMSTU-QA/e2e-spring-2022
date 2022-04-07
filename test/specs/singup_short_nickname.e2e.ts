import SignupPage from  '../pageobjects/signup.page';
import * as assert from 'assert';
import generate_string from '../utilits';

describe('Signup with short username', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should signup with valid credentials', async () => {
        const username = generate_string(2);
        const email = generate_string(10) + '@mail.ru';
        const password = generate_string(10);

        await SignupPage.open();

        await SignupPage.signup(username, email, password);
        assert.strictEqual(await SignupPage.checkMainError(), true, 'No message about incorrect username');
    });
});


