import Page from './page';

class MainPage extends Page {
    private get modalButton() {
        return $('#auth');
    }

    private get passwordInput() {
        return $('#logPassword > .text-input__input');
    }

    private get emailInput() {
        return $('#logEmail > .text-input__input');
    }

    private get headerUsername() {
        return $('.mini-profile__capture');
    }

    private get loginBtn() {
        return $('#logButton');
    }

    private get searchInput() {
        return $('.search__input');
    }

    private get searchButton() {
        return $('.search__button');
    }

    private get searchedText() {
        return $('.info-block__capture > i');
    }

    private async openModal() {
        await this.modalButton.waitForDisplayed();
        await this.modalButton.click();
    }

    private async fillEmail(email: string) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
    }

    private async fillPassword(password: string) {
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
    }

    private async fillSearch(searchText: string) {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(searchText);
    }

    public async search(seatchText: string) {
        await this.fillSearch(seatchText);
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }

    public async login(email: string, password:string) {
        await this.openModal();
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.loginBtn.click();
    }

    public async getUsername() {
        await this.headerUsername.waitForDisplayed();
        return this.headerUsername.getText();
    }

    public async getTextAfterSearch() {
        await this.searchedText.waitForDisplayed();
        return this.searchedText.getText();
    }


    public open(): Promise<string> {
        return super.open('');
    }
}

export default new MainPage('https://volchock.ru');