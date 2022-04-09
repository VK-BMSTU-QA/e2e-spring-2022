import Page from './page';
import {URL} from '../../constants';

class LoginPage extends Page {
    public get inputUsername() {
        return $('input[name=email]');
    }

    public get inputPassword() {
        return $('input[name=password]');
    }

    public get btnSubmit() {
        return $('.auth-form__submit');
    }

    public async fillLogin(username: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
    }

    public async fillPassword(password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async login(username: string, password: string) {
        await this.fillLogin(username);
        await this.fillPassword(password);
        await this.btnSubmit.click();
        await $('.sidebar').waitForDisplayed();
    }

    public open() {
        return super.open('signin');
    }
}

export default new LoginPage(URL);
