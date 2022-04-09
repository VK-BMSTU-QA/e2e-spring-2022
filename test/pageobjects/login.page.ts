import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('#emailInput');
    }

    public get inputPassword () {
        return $('#passwordInput');
    }

    public get btnSubmit () {
        return $('.button-blue');
    }

    public async login (email: string, password: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(1000);
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage('https://bmstusa.ru');
