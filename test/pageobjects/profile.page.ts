import Page from './page';
import {urls} from '../utils/constants';

class ProfilePage extends Page {

    constructor() {
        super(urls.base);
    }

    public get inputLogin() {
        return $('#login');
    }

    public get inputEmail() {
        return $('#email');
    }

    public get inputNewPassword() {
        return $('#password');
    }

    public get inputNewPasswordRepeated() {
        return $('#passwordRepeat');
    }

    public get inputOldPassword() {
        return $('#oldPassword');
    }

    public get btnEnter() {
        return $('.button.profile-box__save-btn');
    }

    public get navbarUserName() {
        return $('#navbarUserNameId');
    }

    public get inputAvatar() {
        return $('#avatarId');
    }

    public get btnAvatar() {
        return $('.button.profile-box__button');
    }

    public async uploadAvatar(path: string) {
        const file = await browser.uploadFile(path);
        await this.btnAvatar.waitForDisplayed();
        await browser.execute(() => {
            document.getElementById('avatarId').style.display = 'block';
        });
        await this.inputAvatar.setValue(file);
    }

    public async isAvatarErrorExisting() {
        return $('#avatar-validation-box').isExisting();
    }

    public async isInputErrorExisting() {
        return $('.error.error_margin').isExisting();
    }

    public async getUserNameNavbar() {
        await this.navbarUserName.waitForDisplayed();
        return this.navbarUserName.getText();
    }

    public async getUserNameInput() {
        await this.inputLogin.waitForDisplayed();
        return this.inputLogin.getAttribute('value');
    }

    public async getEmail() {
        await this.inputEmail.waitForDisplayed();
        return this.inputEmail.getAttribute('value');
    }

    public async changeEmail(email: string, password: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.setOldPassword(password);
        await this.pressEnter();
    }

    public async setLogin(login: string) {
        await this.inputLogin.waitForDisplayed();
        await this.inputLogin.setValue(login);
    }

    public async setOldPassword(login: string) {
        await this.inputOldPassword.waitForDisplayed();
        await this.inputOldPassword.setValue(login);
    }

    public async pressEnter() {
        await this.btnEnter.waitForDisplayed();
        await this.btnEnter.click();
    }

    public async changeLogin(newlogin: string, password: string) {
        await this.setLogin(newlogin);
        await this.setOldPassword(password);
        await this.pressEnter();
    }

    public async refresh() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        browser.refresh();
    }

    public async open() {
        return super.open(urls.profile);
    }

}

export default new ProfilePage();
