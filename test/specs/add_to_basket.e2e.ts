import MainPage from  '../pageobjects/main.page';
import LoginPage from  '../pageobjects/login.page';
import OneProductPage from  '../pageobjects/one_product.page';
import BasketPage from  '../pageobjects/basket.page';

describe('Добавление товара в корзину', () => {
    beforeEach(async () => {
        MainPage.setWindowSize(1400, 1200);
        await LoginPage.open();
        await LoginPage.login(process.env.AZOTLOGIN, process.env.AZOTPASSWORD);
    });

    it('Кнопка "Добавить в корзину" меняется на "Перейти в корзину", при переходе на страницу корзины товар в ней находится',
    async () => {
        await MainPage.clickOnProductForBasket();
        await OneProductPage.clickOnAddInBasketButton();
        await OneProductPage.clickOnGoToBasketButton();
        await BasketPage.seeProductInBasket();
    });
});