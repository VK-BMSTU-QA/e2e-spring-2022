import Page from './page';

class profilePage extends Page {
    private get firstAdvertTitle() {
        return $('.card__content__capture');
    }

    private get removeButton() {
        return $('#deleteBtn');
    }

    private get firstCardDelete() {
        return $('.card__delete');
    }

    private get toArchiveBtn() {
        return $('#modal__button-to-archive');
    }

    private get archiveBtn() {
        return $('.profile-content-right__ads-type=Архив');
    }

    public async getNewAdvertText() {
        await this.firstAdvertTitle.waitForDisplayed();
        return this.firstAdvertTitle.getText();
    }

    public async getFirstArchiveName() {
        await this.archiveBtn.waitForClickable();
        await this.archiveBtn.click();
        await this.firstAdvertTitle.waitForDisplayed();
        return this.firstAdvertTitle.getText();
    }

    public async archiveFirstAdvert() {
        await this.removeButton.waitForClickable();
        await this.removeButton.click();

        await this.firstCardDelete.waitForClickable();
        await this.firstCardDelete.click();

        await this.toArchiveBtn.waitForClickable();
        await this.toArchiveBtn.click();
    }

    public open(): Promise<string> {
        return super.open('profile');
    }
}

export default new profilePage('https://volchock.ru');