import SignupPage from  '../pageobjects/signup.page';
import * as assert from 'assert';

describe('Signup with empty email', () => {
    beforeEach(() => {
        SignupPage.setWindowSize(1400, 1200);
    });

    it('should display error about empty email', async () => {
        await SignupPage.open();

        await SignupPage.fillEmail('1');
        await SignupPage.fillEmail('');

        assert.strictEqual(await SignupPage.checkErrorEmail(), true);
    });
});


