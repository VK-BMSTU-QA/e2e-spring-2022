import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */

    private get productForBasket () {
        return $('div[href="/product?id=879"]');
    }

    private get productForReview () {
        return $('div[href="/product?id=911"]');
    }

    public open () {
        return super.open('');
    }

    public async clickOnProductForBasket() {
        await this.productForBasket.click()
    }

    public async clickOnProductForReview() {
        await this.productForReview.click()
    }
}

export default new MainPage('http://goodvibesazot.tk');