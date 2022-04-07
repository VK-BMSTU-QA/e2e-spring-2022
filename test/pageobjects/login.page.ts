import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputLogin () {
        return $('[id="login"]');
    }

    public get inputPassword () {
        return $('[id="password"]');
    }

    public get btnSubmit () {
        return $('[id="login-button"]');
    }

    public get navbarUsername () {
        return $('[id="navbarUserNameId"]');
    }

    public get navbarLogout () {
        return $('[id="logout"]');
    }

    public async fillUsername (username: string) {
        await this.inputLogin.waitForDisplayed();
        await this.inputLogin.setValue(username);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async login (username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
    }

    public async getEmail () {
        await this.navbarUsername.waitForDisplayed();
        return this.navbarUsername.getText();
    }

    public async auth () {
        await this.open();
        await this.login(process.env.LOGIN, process.env.PASSWORD);
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage('https://brrrello.ru');
