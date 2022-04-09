import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputLogin () {
        return $('#login');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnLogin () {
        return $('#login-button');
    }

    public get userLoginHeader () {
        return $('#navbarUserNameId');
    }

    public async fillLogin (login: string) {
        await this.inputLogin.waitForDisplayed();
        await this.inputLogin.setValue(login);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async login (login: string, password: string) {
        await this.fillLogin(login);
        await this.fillPassword(password);
        await this.btnLogin.click();
    }

    public async getLogin () {
        await this.userLoginHeader.waitForDisplayed();
        return this.userLoginHeader.getText();
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage('https://brrrello.ru');
