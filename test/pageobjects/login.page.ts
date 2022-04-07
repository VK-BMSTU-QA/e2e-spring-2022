import waitForDisplayed from '../../node_modules/webdriverio/build/commands/element/waitForDisplayed';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('input[name="email"]');
    }

    public get inputPassword () {
        return $('input[id="passwordInput"]');
    }

    public get btnSubmit () {
        return $('input[value="Войти"]');
    }

    public async fillLogin (username: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async login (username: string, password: string) {
        await this.fillLogin(username);
        await this.fillPassword(password);
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage('https://bmstusa.ru');
