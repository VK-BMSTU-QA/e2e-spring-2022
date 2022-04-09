import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get inputUsername () {
        return $('.auth-block > form > div:nth-child(1) > label > input');
    }

    private get authBlock () {
        return $('.auth-block');
    }

    private get inputEmail () {
        return $('.auth-block > form > div:nth-child(2) > label > input');
    }

    private get inputPassword () {
        return $('.auth-block > form > div:nth-child(3) > label > input');
    }

    private get inputRepeatPassword () {
        return $('.auth-block > form > div:nth-child(4) > label > input');
    }

    private get errorUsername () {
        return $('.auth-block > form > div:nth-child(1) > div > .validation_error');
    }

    private get errorEmail () {
        return $('.auth-block > form > div:nth-child(2) > div > .validation_error');
    }

    private get errorPassword () {
        return $('.auth-block > form > div:nth-child(3) > div > .validation_error');
    }

    private get errorRepeatPassword () {
        return $('.auth-block > form > div:nth-child(4) > div > .validation_error');
    }

    private get exitButton () {
        return $('.navbar__popup > a[router-go="/logout"]');
    }

    private get profileMenu () {
        return $('.navbar__profile');
    }

    private get exitApplyButton () {
        return $('button[class="btn btn_primary "]');
    }


    private get mainError () {
        return $('.auth-block > form > .error');
    }

    private get btnSubmit () {
        return $('.auth-block > form > button');
    }

    private get usernameHeader () {
        return $('.profile-card__username');
    }

    public async fillUsername (username: string) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
    }

    public async checkErrorUsername () {
        return  this.errorUsername.isDisplayed();
    }

    public async fillEmail (email: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
    }

    public async checkErrorEmail () {
        return  this.errorEmail.isDisplayed();
    }

    public async fillPassword (password: string) {
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
    }

    public async checkErrorPassword () {
        return  this.errorPassword.isDisplayed();
    }

    public async fillRepeatPassword (password: string) {
        await this.inputRepeatPassword.waitForDisplayed();
        await this.inputRepeatPassword.setValue(password);
    }

    public async checkErrorRepeatPassword () {
        return  this.errorRepeatPassword.isDisplayed();
    }

    public async checkMainError () {
        await   this.mainError.waitForDisplayed();
        return  this.mainError.isDisplayed();
    }

    public async submitSignup () {
        await this.btnSubmit.click();
    }

    public async checkAuthBlock () {
        await  this.authBlock.waitForDisplayed();
        return this.authBlock.isDisplayed();
    }

    public async submitExit () {
        await this.exitButton.waitForDisplayed();
        await this.exitButton.click();
    }

    public async moveToProfileMenu () {
        await this.profileMenu.moveTo();
    }

    public async submitApplyExit () {
        await this.exitButton.waitForDisplayed();
        await this.exitApplyButton.click();
    }

    public async signup (username: string, email: string, password: string) {
        await this.fillUsername(username);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.fillRepeatPassword(password);
        await this.submitSignup();
    }

    public async logout () {
        await this.moveToProfileMenu();
        await this.submitExit();
        await this.submitApplyExit();
    }

    public async getUsername () {
        await this.usernameHeader.waitForDisplayed();
        return this.usernameHeader.getText();
    }

    public open () {
        return super.open('signup');
    }
}

export default new SignupPage('https://pyaterochka-team.site');
