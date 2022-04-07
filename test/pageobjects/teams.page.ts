import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TeamsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get divError () {
        return $('.error');
    }

    public get btnModalNewBoard () {
        return $('.add-board-btn');
    }

    public get btnModalNewTeam () {
        return $('#createTeamBtnId');
    }

    public get btnModalDeleteTeam () {
        return $('.team-delete-btn');
    }

    public get inputBoardName () {
        return $('#createBoardPopUpNameId');
    }

    public get inputTeamName () {
        return $('#createTeamPopUpNameId');
    }

    public get btnCreateBoard () {
        return $('#createBoardPopUpSubmitId');
    }

    public get btnCreateTeam () {
        return $('#createTeamPopUpSubmitId');
    }

    public get btnDeleteTeam () {
        return $('#deletePopUpConfirmBtnId');
    }

    public get btnBoardCard () {
        return $('.bord-card');
    }

    public get btnEditTeam () {
        return $('.team-edit-btn');
    }

    public get boardCardHeader () {
        return $('.bord-card__header');
    }

    public get teamsContainer () {
        return $('.teams-container');
    }

    public async openModalCreateBoard () {
        await this.btnModalNewBoard.waitForEnabled();
        await this.btnModalNewBoard.click();
    }

    public async openModalCreateTeam () {
        await this.btnModalNewTeam.waitForEnabled();
        await this.btnModalNewTeam.click();
    }

    public async openModalDeleteTeam () {
        await this.btnModalDeleteTeam.waitForEnabled();
        await this.btnModalDeleteTeam.click();
    }

    public async fillBoardName (boardName: string) {
        await this.inputBoardName.waitForDisplayed();
        await this.inputBoardName.setValue(boardName);
    }

    public async fillTeamName (teamName: string) {
        await this.inputTeamName.waitForDisplayed();
        await this.inputTeamName.setValue(teamName);
    }

    public async createTeam (teamName: string) {
        await this.openModalCreateTeam();
        await this.fillTeamName(teamName);
        await this.btnCreateTeam.click();
    }

    public async createBoard (boardName: string) {
        await this.openModalCreateBoard();
        await this.fillBoardName(boardName);
        await this.btnCreateBoard.click();
    }

    public async openBoard () {
        await this.btnBoardCard.waitForEnabled();
        await this.btnBoardCard.click();
    }

    public async getBoardName () {
        await this.boardCardHeader.waitForDisplayed();
        return this.boardCardHeader.getText();
    }

    public async isTeamCreated () {
        await this.teamsContainer.waitForEnabled();
        return this.btnEditTeam.isDisplayed();
    }

    public isBoardNameErrorOccurred () {
        return this.divError.isDisplayed()
    }

    public async deleteTeam () {
        await this.openModalDeleteTeam();
        await this.btnDeleteTeam.waitForClickable();
        await this.btnDeleteTeam.click();
    }

    public open () {
        return super.open('boards');
    }
}

export default new TeamsPage('https://brrrello.ru');
