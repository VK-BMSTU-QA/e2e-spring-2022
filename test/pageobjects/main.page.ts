import Page from './page';

class MainPage extends Page {
    public get newAdvertName() {
        return $('.card__content__capture');
    }

    public get modalButton() {
        return $('#auth');
    }

    public get passwordInput() {
        return $('#logPassword > .text-input__input');
    }

    public get emailInput() {
        return $('#logEmail > .text-input__input');
    }

    public get headerUsername() {
        return $('.mini-profile__capture');
    }

    public get loginBtn() {
        return $('#logButton');
    }

    public get searchInput() {
        return $('.search__input');
    }

    public get searchButton() {
        return $('.search__button');
    }

    public get searchedText() {
        return $('.info-block__capture > i');
    }

    public async getUsername() {
        await this.headerUsername.waitForDisplayed();
        return this.headerUsername.getText();
    }

    public async getTextAfterSearch() {
        await this.searchedText.waitForDisplayed();
        return this.searchedText.getText();
    }

    public async openModal() {
        await this.modalButton.click();
    }

    public async fillEmail(email: string) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);
    }

    public async fillPassword(password: string) {
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
    }

    public async fillSearch(searchText: string) {
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

    public open(): Promise<string> {
        return super.open('');
    }
}

export default new MainPage('https://volchock.ru');