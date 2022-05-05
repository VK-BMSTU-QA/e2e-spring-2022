import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get inputUsername () {
        return $('input[type="email"]');
    }

    private get inputPassword () {
        return $('input[type="password"]');
    }

    private get btnSubmit () {
        return $('button[class="btn btn_primary btn_rounded"]');
    }

    private get userEmailHeader () {
        return $('.profile-card__username');
    }

    private get invalidLoginOrPassword () {
        return $('.error');
    }

    private get btnOpenNavBar () {
        return $('.navbar__profile-name');
    }

    private get btnNavBarLogout () {
        return $('.navbar__popup > a[router-go="/logout"]');
    }
    
    private get pageName () {
        return $('.auth-block > h1[key="null"]');
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

    public async logout () {
        await this.btnOpenNavBar.click();
        await this.btnNavBarLogout.click();
    }

    public async getEmail () {
        await this.userEmailHeader.waitForDisplayed();
        return this.userEmailHeader.getText();
    }

    public async getPageName () {
        await this.pageName.waitForDisplayed();
        return this.pageName.getText();
    }

    public async getError () {
        await this.invalidLoginOrPassword.waitForDisplayed();
        return this.invalidLoginOrPassword.getText();
    }

    public open () {
        return super.open('signin');
    }
}

export default new LoginPage('https://pyaterochka-team.site');
