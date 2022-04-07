import MainPage from '../pageobjects/main.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(() => {
        MainPage.setWindowSize(1400, 1200);
    });

    it('поиск по тексту введеному в поисковый инпут', async () => {
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