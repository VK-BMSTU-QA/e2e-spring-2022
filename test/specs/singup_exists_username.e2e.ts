import SignupPage from  '../pageobjects/signup.page';
import generateString, {CorrectLenString, EmailString} from '../utilits';
import * as assert from 'assert';

describe('Signup with exists username', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should display error message about repeated username', async () => {
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

        await SignupPage.logout();

        assert.strictEqual(await SignupPage.checkAuthBlock(), true,  'Couldn\'t logout');

        await SignupPage.open();

        await SignupPage.signup(username, email, password);
        assert.strictEqual(await SignupPage.checkMainError(), true, 'No error message about repeat username');
    });
});


