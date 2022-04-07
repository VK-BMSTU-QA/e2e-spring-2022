import MainPage from '../pageobjects/main.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        MainPage.setWindowSize(1400, 1200);
    });

    it('should search for text in search input after click on search btn', async () => {
        const expectedSearchText = 'тест';
        await MainPage.open();
        await MainPage.search(expectedSearchText);
        const gotSearchText = await MainPage.getTextAfterSearch();

        assert.strictEqual(
            gotSearchText,
            expectedSearchText,
            `Происходит поиск по тексту "${gotSearchText}", введеному в текстовый инпут "${expectedSearchText}"`,
        );
    });
});