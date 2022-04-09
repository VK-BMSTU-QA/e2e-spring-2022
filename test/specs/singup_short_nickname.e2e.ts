import SignupPage from  '../pageobjects/signup.page';
import * as assert from 'assert';
import generateString, {CorrectLenString, EmailString} from '../utilits';

const ShortUsernameLen = 2;

describe('Signup with short username', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should display error message about short username', async () => {
        const username = generateString(ShortUsernameLen);
        const email = generateString(CorrectLenString) + EmailString;
        const password = generateString(CorrectLenString);

        await SignupPage.open();

        await SignupPage.signup(username, email, password);
        assert.strictEqual(await SignupPage.checkMainError(), true, 'No error message about short username');
    });
});


