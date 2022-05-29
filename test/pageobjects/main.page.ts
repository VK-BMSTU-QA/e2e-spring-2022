import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */

    private productForBasket(productID: number) {
        return $(`div[href="/product?id=${productID}"]`);
    }

    private productForReview(productID: number) {
        return $(`div[href="/product?id=${productID}"]`);
    }

    public open () {
        return super.open('');
    }

    public async clickOnProductForBasket(productID: number) {
        await this.productForBasket(productID).click();
    }

    public async clickOnProductForReview(productID: number) {
        await this.productForReview(productID).click();
    }
}

export default new MainPage('http://goodvibesazot.tk');