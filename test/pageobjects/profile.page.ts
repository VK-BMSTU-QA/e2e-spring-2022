import waitForDisplayed from '../../node_modules/webdriverio/build/commands/element/waitForDisplayed';
import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ProfilePage extends Page {

    public get editProfileButton () {
        return $('[id="editButton"]');
    }

    public get userNameInput () {
        return $('[id="nameInput"]');
    }

    public get submitButton () {
        return $('[type="submit"]');
    }

    public get userName () {
        return $('[class="primary-text primary-text_name"]');
    }

    public async changeUserName (username: string) {
       await this.editProfileButton.isClickable();
       await this.editProfileButton.click();
       await this.userNameInput.waitForDisplayed();
       await this.userNameInput.setValue(username);
       await this.submitButton.click();
       await this.userName.isDisplayed();
       return await this.userName.getText();
    }
 }

 export default new ProfilePage('https://bmstusa.ru');
 