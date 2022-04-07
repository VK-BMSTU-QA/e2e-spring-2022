import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('.user-box__login');
    }

    public get inputPassword () {
        return $('.user-box__password');
    }

    public get btnSubmit () {
        return $('.auth-btn');
    }

    public get noUserError () {
        return $('.auth-content-inner__error');
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

    public async waitForError() {
        return this.noUserError.getText();
    }


    public open () {
        return super.open('signin');
    }
}

export default new LoginPage('http://goodvibesazot.tk');
