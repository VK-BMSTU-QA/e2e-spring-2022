import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BoardPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnModalSettings () {
        return $('#showBoardSettingPopUpId');
    }

    public get btnDeleteBoard () {
        return $('#boardSettingPopUpDeleteBtnId');
    }

    public get btnConfirmDeleteBoard () {
        return $('#boardSettingPopUpDeleteConfirmBtnId');
    }

    public async openModalSettings () {
        await this.btnModalSettings.waitForEnabled();
        await this.btnModalSettings.click();
    }

    public async deleteBoard () {
        await this.openModalSettings();
        await this.btnDeleteBoard.waitForClickable();
        await this.btnDeleteBoard.click();
        await this.btnConfirmDeleteBoard.waitForClickable();
        await this.btnConfirmDeleteBoard.click();
    }
}

export default new BoardPage('https://brrrello.ru');
