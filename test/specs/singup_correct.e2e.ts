import SignupPage from  '../pageobjects/signup.page';
import generateString, {CorrectLenString, EmailString} from '../utilits';
import * as assert from 'assert';


describe('Signup with correct username, email and password', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should signup with correct credentials', async () => {
        const username = generateString(CorrectLenString);
        const email = generateString(CorrectLenString) + EmailString;
        const password = generateString(CorrectLenString);

        await SignupPage.open();

        await SignupPage.signup(username, email, password);
        const headerUsername = await SignupPage.getUsername();

        assert.strictEqual(
            headerUsername,
            username,
            `Username of signup user ${headerUsername} is not equal to username on page ${username}`,
        );
    });
});


