import SignupPage from  '../pageobjects/signup.page';
import * as assert from 'assert';
import generateString, {CorrectLenString, EmailString} from '../utilits';

const IncorrectUsernameLen = 2;

describe('Signup with short username', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should signup with valid credentials', async () => {
        const username = generateString(IncorrectUsernameLen);
        const email = generateString(CorrectLenString) + EmailString;
        const password = generateString(CorrectLenString);

        await SignupPage.open();

        await SignupPage.signup(username, email, password);
        assert.strictEqual(await SignupPage.checkMainError(), true, 'No message about incorrect username');
    });
});


