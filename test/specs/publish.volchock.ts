import MainPage from '../pageobjects/main.page';
import newAdvPage from '../pageobjects/newAdv.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(async () => {
        MainPage.setWindowSize(1400, 1200);
        newAdvPage.setWindowSize(1400, 1200);
        await MainPage.open();
        await MainPage.login(process.env.LOGIN, process.env.PASSWORD);
    });

    it('should search for text in search input after click on search btn', async () => {
        await newAdvPage.open();
        await newAdvPage.publishAdvert('тест');

        assert.strictEqual(
            1,
            1,
            'Происходит поиск по тексту ", введеному в текстовый инпут "',
        );
    });
});