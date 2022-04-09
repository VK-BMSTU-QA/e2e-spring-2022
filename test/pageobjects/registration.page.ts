import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get inputUsername () {
        return $('.user-box__login');
    }

    private get inputEmail () {
        return $('.user-box__email');
    }

    private get inputPassword () {
        return $('.user-box__password');
    }

    private get inputConfirmPassword () {
        return $('.user-box__confirm-password');
    }

    private get btnSubmit () {
        return $('.auth-btn');
    }

    private get userExistsError () {
        return $('.auth-content-inner__error');
    }

    public async fillUserName (username: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
    }

    public async fillUserEmail (email: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async confirmPassword (password: string) {
        await this.inputConfirmPassword.waitForDisplayed();
        await this.inputConfirmPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async registrate (username: string, email: string, password: string, confirmPassword: string) {
        await this.fillUserName(username);
        await this.fillUserEmail(email);
        await this.fillPassword(password);
        await this.confirmPassword(confirmPassword);
    }

    public async registrationError() {
        await this.userExistsError.waitForDisplayed()
        return this.userExistsError.getText();
    }

    public open () {
        return super.open('signup');
    }
}

export default new RegistrationPage('http://goodvibesazot.tk');