import MainPage from  '../pageobjects/main.page';
import LoginPage from  '../pageobjects/login.page';
import OneProductPage from  '../pageobjects/one_product.page';
import * as assert from 'assert';

describe('Отправить отзыв без оценки', () => {
    beforeEach(() => {
        MainPage.setWindowSize(1400, 1200);
    });

    it('Появляется уведомление об ошибке "Нужно выбрать оценку товара и написать отзыв"', async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.AZOTLOGIN, process.env.AZOTPASSWORD);
        await MainPage.clickOnProductForReview();
        await OneProductPage.waitAddCommentArea();
        await OneProductPage.addComment();
        await OneProductPage.waitAddCommentButton();
        await OneProductPage.clickOnAddCommentButton();
        const received = await OneProductPage.waitAddCommentError();
        const expected = 'Нужно выбрать оценку товара и написать отзыв'

        assert.strictEqual(
            received,
            expected,
        );
    });
});