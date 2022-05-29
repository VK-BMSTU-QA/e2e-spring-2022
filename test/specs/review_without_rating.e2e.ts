import MainPage from  '../pageobjects/main.page';
import LoginPage from  '../pageobjects/login.page';
import OneProductPage from  '../pageobjects/one_product.page';
import * as assert from 'assert';

describe('Отправить отзыв без оценки', () => {
    beforeEach(async () => {
        MainPage.setWindowSize(1400, 1200);
        await LoginPage.open();
        await LoginPage.login(process.env.AZOTLOGIN, process.env.AZOTPASSWORD);
    });

    it('Появляется уведомление об ошибке "Нужно выбрать оценку товара и написать отзыв"', async () => {
        var productID = 911;

        await MainPage.clickOnProductForReview(productID);
        await OneProductPage.addComment('Хороший товар');
        await OneProductPage.clickOnAddCommentButton();
        const received = await OneProductPage.getAddCommentError();
        const expected = 'Нужно выбрать оценку товара и написать отзыв';

        assert.strictEqual(
            received,
            expected,
        );
    });
});