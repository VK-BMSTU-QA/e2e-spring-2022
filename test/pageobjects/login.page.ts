import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('input[name="email"]');
    }

    public get inputPassword () {
        return $('input[type="password"]');
    }

    public get btnSubmit () {
        return $('input[type="submit"]');
    }

    public get headerAvatar () {
        return $('#header-avatar');
    }

    public get emailField () {
        return $('.user-popup-userblock-email');
    }

    public get passwordLengthError () {
        return $('#passwordError');
    }

    public get signupButton () {
        return $('[href="/signup"]');
    }

    public get formTitle () {
        return $('.auth-title');
    }

    public async getFormTitleText () {
        await this.formTitle.waitForDisplayed();
        return this.formTitle.getText();
    }

    public async fillLogin (email: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }

    public async redirectToSignUp () {
        await this.signupButton.waitForDisplayed();
        await this.signupButton.click();
    }

    public async login (email: string, password: string) {
        await this.fillLogin(email);
        await this.fillPassword(password);
    }

    public async getPasswordError () {
        await this.passwordLengthError.waitForDisplayed();
        return this.passwordLengthError.getText();
    }

    public async getUserEmail () {
        await this.headerAvatar.waitForClickable();
        await this.headerAvatar.click();
        await this.emailField.waitForExist();
        return this.emailField.getText();
    }

    public openMain () {
        return super.open('');
    }

    public openLogin () {
        return super.open('login');
    }
}

export default new LoginPage('https://bmstusa.ru');
