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
        return $('.button-blue');
    }

    public async fillEmailAndPassword (username: string, password: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(1000);
    }

    public async login (username: string, password: string) {
        await this.fillEmailAndPassword(username, password)
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage('https://bmstusa.ru');
