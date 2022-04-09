import waitForDisplayed from '../../node_modules/webdriverio/build/commands/element/waitForDisplayed';
import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
 class MainPage extends Page {

    public get userHeaderAvatar () {
        return $('[class="header__avatar"]');
    }

    public get userEmailHeader () {
        return $('[class="user-popup-userblock-email"]');
    }

    public get userPopup () {
        return $('[class="user-popup-userblock"]');
    }
    
    public get CategoryTusovki () {
        return $('[id="filter-category-0"]');
    }
    //мини костыль
    public get eventStupino  () {
        return $('[href="events?id=77"]');
    }


    public async getEmail () {
        await this.userHeaderAvatar.isClickable();
        await this.userHeaderAvatar.click()
        await this.userEmailHeader.waitForDisplayed();
        return await this.userEmailHeader.getText();
    }

    public async toProfile () {
        await this.userHeaderAvatar.isClickable();
        await this.userHeaderAvatar.click();
        await this.userPopup.isClickable();
        await this.userPopup.click();
    }

    public async filterCategoryTusovki () {
        await this.CategoryTusovki.isClickable();
        await this.CategoryTusovki.click();
        await this.eventStupino.isDisplayed();
        await this.eventStupino.click();
    }

    

    public open () {
        return super.open('');
    }
 }

 export default new MainPage('https://bmstusa.ru');
 