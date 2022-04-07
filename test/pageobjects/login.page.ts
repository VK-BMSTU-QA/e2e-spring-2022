import Page from './page';

class LoginPage extends Page {

    public get inputEmail () {
        return $('input[name="email"]');
    }

    public get inputPassword () {
        return $('#passwordInput');
    }

    public get btnSubmit () {
        return $('input[type="submit"]');
    }

    public get headerAvatar() {
        return $('#header-avatar')
    }

    public get userEmailHeader () {
        return $('.user-popup-userblock-email');
    }

    public async fillLogin (username: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(username);
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
        await this.headerAvatar.click();
        await this.userEmailHeader.waitForDisplayed();
        return await this.userEmailHeader.getText();
    }

    public openMain() {
        return super.open('')
    }

    public async open () {
        return super.open('login')
    }
}

export default new LoginPage('https://bmstusa.ru');
