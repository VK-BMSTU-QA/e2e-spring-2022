import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasketPage extends Page {
    /**
     * define selectors using getter methods
     */

    private productInBasket(productID: number) {
        return $(`.table-product-${productID}`);
    }

    public open () {
        return super.open('cart');
    }

    public async waitForProductInBasket(productID: number) {
        return this.productInBasket(productID).waitForDisplayed();
    }
}

export default new BasketPage('http://goodvibesazot.tk');