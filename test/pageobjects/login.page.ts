import Page from './page';
import {urls} from '../utils/Constants';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    constructor() {
        super(urls.base);
    }

    public get inputLogin () {
        return $('input[name="login"]');
    }

    public get inputPassword () {
        return $('input[name="password"]');
    }

    public get btnEnter () {
        return $('button[type="submit"]');
    }

    public get spanUserName () {
        return $('#navbarUserNameId');
    }

    public async getUserName () {
        await this.spanUserName.waitForDisplayed();
        return this.spanUserName.getText();
    }

    public async fillLogin (login: string) {
        await this.inputLogin.waitForDisplayed();
        await this.inputLogin.setValue(login);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async pressEnter() {
        await this.btnEnter.waitForDisplayed();
        await this.btnEnter.click();
    }

    public async login (username: string, password: string) {
        await this.fillLogin(username);
        await this.fillPassword(password);
        await this.pressEnter();
    }

    public async open () {
        return super.open('login');
    }
}

export default new LoginPage();
