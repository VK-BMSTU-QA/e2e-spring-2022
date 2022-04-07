import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    public get inputUsername () {
        return $('#auth-form > input:nth-child(1)');
    }

    public get inputPassword () {
        return $('#auth-form > input:nth-child(2)');
    }

    public get btnSubmit () {
        return $('#auth-form > div.auth-form__buttons > input');
    }

    public async fillLogin (username: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async login (username: string, password: string) {
        await this.fillLogin(username);
        await this.fillPassword(password);
        await this.btnSubmit.click();
        await $('.sidebar').waitForDisplayed();
    }

    public open () {
        return super.open('signin');
    }
}

export default new LoginPage('https://lostpointer.site');
