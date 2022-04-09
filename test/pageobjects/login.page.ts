import Page from './page';
import {URL} from '../../constants';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('#auth-form > input:nth-child(1)');
    }

    public get inputPassword () {
        return $('#auth-form > input:nth-child(2)');
    }

    public get btnSubmit () {
        return $('#auth-form > div.auth-form__buttons > input');
    }

    public get profileBtn () {
        return $('#app > div.app__content > div.main-layout > div.topbar > span > div > a');
    }

    public get userEmail () {
        return $('#content > div > div.profile-page__content > form.profile-form > div:nth-child(2) > input');
    }

    public async fillLogin (email: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async openProfileAfterLogin () {
        await this.profileBtn.waitForDisplayed();
        await this.profileBtn.click();
    }

    public async getEmailAfterLogin () {
        await this.userEmail.waitForDisplayed();
        return this.userEmail.getValue();
    }

    public async login (email: string, password: string) {
        await this.fillLogin(email);
        await this.fillPassword(password);
    }

    public open () {
        return super.open('signin');
    }
}

export default new LoginPage(URL);
