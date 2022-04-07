import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class SignUpPage extends Page {
    public get headerAvatar () {
        return $('#header-avatar');
    }

    public get emailField () {
        return $('.user-popup-userblock-email');
    }

    public get nameInput() {
        return $('#nameInput');
    }

    public get surnameInput() {
        return $('#surnameInput');
    }

    public get emailInput() {
        return $('#emailInput');
    }

    public get passwordInput() {
        return $('#passwordInput1');
    }

    public get passwordInputAgain() {
        return $('#passwordInput2');
    }

    public get btnSubmit () {
        return $('input[type="submit"]');
    }

    public async fillInputs (user) {
        await this.nameInput.waitForDisplayed();
        await this.nameInput.setValue(user.name);
        await this.surnameInput.waitForDisplayed();
        await this.surnameInput.setValue(user.surname);
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(user.email);
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(user.password);
        await this.passwordInputAgain.waitForDisplayed();
        await this.passwordInputAgain.setValue(user.password);
    }

    public async signUp (user) {
        await this.fillInputs(user);
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }

    public async getUserEmail () {
        await this.headerAvatar.waitForClickable();
        await this.headerAvatar.click();
        await this.emailField.waitForExist();
        return this.emailField.getText();
    }

    public openMain() {
        return super.open('');
    }

    public openSignUp() {
        return super.open('signup');
    }
}

export default new SignUpPage('https://bmstusa.ru');