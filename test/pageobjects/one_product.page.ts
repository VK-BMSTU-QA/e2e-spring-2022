import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OneProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get addInBasketButton () {
        return $('.info-card-btn__cart');
    }

    private get addCommentArea () {
        return $('.add-comment-text')
    }

    private get goToBasketButton () {
        return $('.info-card-btn__add-cart');
    }

    private get inputGreatProduct () {
        return $('input[href="/product?id=911"]');
    }

    private get addCommentButton () {
        return $('.add-comment-btn');
    }

    private get addCommentError () {
        return $('.new-comment-alert-label');
    }


    public open () {
        return super.open('product?id=867');
    }

    private async waitAddInBasketButton() {
        return this.addInBasketButton.waitForDisplayed()
    }

    private async waitGoToBasketButton() {
        return this.goToBasketButton.waitForDisplayed()
    }

    public async getAddInBasketButton() {
        return this.addInBasketButton.getText()
    }

    public async getGoToBasketButton() {
        return this.goToBasketButton.getText()
    }

    public async clickOnAddInBasketButton() {
        await this.waitAddInBasketButton()
        await this.addInBasketButton.click()
    }

    public async clickOnGoToBasketButton() {
        await this.waitGoToBasketButton()
        await this.goToBasketButton.click()
    }

    private async waitAddCommentButton() {
        await this.addCommentButton.waitForDisplayed()
    }

    public async clickOnAddCommentButton() {
        await this.waitAddCommentButton()
        await this.addCommentButton.click()
    }

    private async waitAddCommentArea() {
        await this.addCommentArea.waitForDisplayed()
    }

    public async addComment() {
        await this.waitAddCommentArea()
        await this.addCommentArea.setValue('Nice')
    }

    public async getAddCommentError() {
        await this.addCommentError.waitForDisplayed()
        return this.addCommentError.getText()
    }
}

export default new OneProductPage('http://goodvibesazot.tk');