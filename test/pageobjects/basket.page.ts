import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasketPage extends Page {
    /**
     * define selectors using getter methods
     */

    private get productInBasket () {
        return $('.table-product-879');
    }

    public open () {
        return super.open('cart');
    }

    private async waitForProductInBasket() {
        return this.productInBasket.waitForDisplayed()
    }

    public async seeProductInBasket() {
        await this.waitForProductInBasket()
    }
}

export default new BasketPage('http://goodvibesazot.tk');