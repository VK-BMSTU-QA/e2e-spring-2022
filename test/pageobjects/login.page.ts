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
        return $('input[name=email]');
    }

    public get inputPassword () {
        return $('input[name=password]');
    }

    public get btnSubmit () {
        return $('.auth-form__submit');
    }

    public async fillLogin (email: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async login (email: string, password: string) {
        await this.fillLogin(email);
        await this.fillPassword(password);
        await this.btnSubmit.click();
        await $('.sidebar').waitForDisplayed();
    }

    public open () {
        return super.open('signin');
    }
}

export default new LoginPage(URL);
