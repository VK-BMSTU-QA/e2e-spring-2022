import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get categoryListButton () {
        return $('.header__aside');
    }

    public get allProducts () {
        return $('.categories__span-fa');
    }

    public get categoryProductsTitle () {
        return $('.product-table__title');
    }

    public get productForBasket () {
        return $('div[href="/product?id=879"]');
    }

    public get productForReview () {
        return $('div[href="/product?id=911"]');
    }

    public open () {
        return super.open('');
    }

    public async waitcategoryFromCategoryList() {
        return this.allProducts.waitForExist()
    }

    public async waitcategoryProductsTitle() {
        return this.categoryProductsTitle.waitForExist()
    }

    public async categoryFromCategoryList() {
        return this.allProducts.getText()
    }

    public async categoryFromCategoryProductsPage() {
        return this.categoryProductsTitle.getText()
    }

    public async clickOnCategoryButton() {
        await this.categoryListButton.click()
    }

    public async clickOnAllProducts() {
        await this.allProducts.click()
    }

    public async clickOnProductForBasket() {
        await this.productForBasket.click()
    }

    public async clickOnProductForReview() {
        await this.productForReview.click()
    }
}

export default new MainPage('http://goodvibesazot.tk');