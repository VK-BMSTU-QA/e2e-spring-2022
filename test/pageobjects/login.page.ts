import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('input[name="username"]');
    }

    public get inputPassword () {
        return $('input[name="password"]');
    }

    public get btnSubmit () {
        return $('[data-test-id="submit-button"]');
    }

    public get btnNext () {
        return $('[data-test-id="next-button"]');
    }

    public get userEmailHeader () {
        return $('.ph-project__user-name');
    }

    public async fillLogin (username: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.btnNext.click();
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

    public async getEmail () {
        await this.userEmailHeader.waitForDisplayed();
        return this.userEmailHeader.getText();
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage('https://account.mail.ru');
