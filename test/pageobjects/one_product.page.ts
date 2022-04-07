import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OneProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addInBasketButton () {
        return $('.info-card-btn__cart');
    }

    public get addCommentArea () {
        return $('.add-comment-text')
    }

    public get goToBasketButton () {
        return $('.info-card-btn__add-cart');
    }

    public get inputGreatProduct () {
        return $('input[href="/product?id=911"]');
    }

    public get addCommentButton () {
        return $('.add-comment-btn');
    }

    public get addCommentError () {
        return $('.new-comment-alert-label');
    }


    public open () {
        return super.open('product?id=867');
    }

    public async waitAddInBasketButton() {
        return this.addInBasketButton.waitForDisplayed()
    }

    public async waitGoToBasketButton() {
        return this.goToBasketButton.waitForDisplayed()
    }

    public async getAddInBasketButton() {
        return this.addInBasketButton.getText()
    }

    public async getGoToBasketButton() {
        return this.goToBasketButton.getText()
    }

    public async clickOnAddInBasketButton() {
        await this.addInBasketButton.click()
    }

    public async clickOnGoToBasketButton() {
        await this.goToBasketButton.click()
    }

    public async clickOnAddCommentButton() {
        await this.addCommentButton.click()
    }

    public async waitAddCommentButton() {
        await this.addCommentButton.waitForDisplayed()
    }

    public async waitAddCommentArea() {
        await this.addCommentArea.waitForDisplayed()
    }

    public async addComment() {
        await this.addCommentArea.setValue('Nice')
    }

    public async waitAddCommentError() {
        await this.addCommentError.waitForDisplayed()
        return this.addCommentError.getText()
    }
}

export default new OneProductPage('http://goodvibesazot.tk');