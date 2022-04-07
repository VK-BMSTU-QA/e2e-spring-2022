import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasketPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get productInBasket () {
        return $('.table-product-879');
    }

    public open () {
        return super.open('cart');
    }

    public async waitForProductInBasket() {
        return this.productInBasket.waitForDisplayed()
    }
}

export default new BasketPage('http://goodvibesazot.tk');