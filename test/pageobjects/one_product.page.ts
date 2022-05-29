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
        return $('.add-comment-text');
    }

    private get goToBasketButton () {
        return $('.info-card-btn__add-cart');
    }

    private get addCommentButton () {
        return $('.add-comment-btn');
    }

    private get addCommentError () {
        return $('.new-comment-alert-label');
    }

    public async clickOnAddInBasketButton() {
        await this.addInBasketButton.waitForDisplayed();
        await this.addInBasketButton.click();
    }

    public async clickOnGoToBasketButton() {
        await this.goToBasketButton.waitForDisplayed();
        await this.goToBasketButton.click();
    }

    public async clickOnAddCommentButton() {
        await this.addCommentButton.waitForDisplayed();
        await this.addCommentButton.click();
    }

    public async addComment(comment: string) {
        await this.addCommentArea.waitForDisplayed();
        await this.addCommentArea.setValue(comment);
    }

    public async getAddCommentError() {
        await this.addCommentError.waitForDisplayed();
        return this.addCommentError.getText();
    }
}

export default new OneProductPage('http://goodvibesazot.tk');