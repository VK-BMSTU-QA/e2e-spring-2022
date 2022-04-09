import MainPage from '../pageobjects/main.page';
import * as assert from 'assert';

describe('Поиск объявления по тексту', () => {
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
            `Результат поиска ${gotSearchText} отличается от содержимого поиского инпута ${expectedSearchText}`,
        );
    });
});