import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BoardPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get lblBoardName () {
        return $('.board-header__name');
    }

    public get btnAddMember () {
        return $('[id="showAddBoardMemberPopUpId"]');
    }

    public get btnCreateCardList () {
        return $('[id="showCreateCardListPopUpId"]');
    }

    public get btnBoardSettings () {
        return $('[id="showBoardSettingPopUpId"]');
    }

    public get btnBoardTags () {
        return $('[id="showTagsBoardPopUpId"]');
    }

    public get modalCreateCardList () {
        return $('.popup-content_card-list');
    }

    public get modalTagList () {
        return $('.popup-content_tag-list');
    }

    public get modalDeleteCardList () {
        return $('.popup-content_delete');
    }

    public get modalContentInvite () {
        return $('.popup-content_invite');
    }

    public get modalSettings () {
        return $('.popup-content_settings');
    }

    public get modalSettingsTitle () {
        return $('[id="boardSettingPopUpTitleId"]');
    }

    public get modalSettingsCreate () {
        return $('[id="boardSettingPopUpSaveBtnId"]');
    }

    public get divColumn () {
        return $('.column');
    }

    public get divColumnHeaderTitle () {
        return $('.column__title');
    }

    public get modalDeleteCardListButton () {
        return $('[id="deleteCLPopUpConfirmBtnId"]');
    }

    public get modalCreateCardListTitle () {
        return $('[id="cardListPopUpTitleId"]');
    }

    public get modalCreateCardListCreate () {
        return $('[id="cardListPopUpCreateBtnId"]');
    }

    public get modalTagAddTagButton () {
        return $('[id="showTagPopUpBtnId"]');
    }

    public get modalTagEdit () {
        return $('.popup-content_tag');
    }

    public get modalTagEditInput () {
        return $('[id="tagNameInputId"]');
    }

    public get modalTagEditButton () {
        return $('[id="tagPopUpCreateBtnId"]');
    }

    public get modalTagName () {
        return $('.tags-list__tag-name');
    }

    public get modalAddMemberInput () {
        return $('[id="addUserPopUpSearchInputId"]');
    }

    // очень страшно, помогите
    public get modalAddMemberSearchResultUsername () {
        return $('.user-name');
    }

    // Прибито молотком - не успеваю
    public get testUserDpesht () {
        return $('[title="DPesht"]');
    }

    public async openCreateCardListModal () {
        await this.btnCreateCardList.waitForDisplayed();
        await this.btnCreateCardList.click();
        await this.modalCreateCardList.waitForDisplayed();
    }

    public async fillmodalCreateCardList (title: string) {
        await this.modalCreateCardListTitle.waitForDisplayed();
        await this.modalCreateCardListTitle.setValue(title);
        await this.modalCreateCardListCreate.waitForDisplayed();
        await this.modalCreateCardListCreate.click();
    }

    public async getColumnTitle () {
        await this.divColumnHeaderTitle.waitForDisplayed();
        return await this.divColumnHeaderTitle.getText();
    }

    public async openBoardSettingsModal () {
        await this.btnBoardSettings.waitForDisplayed();
        await this.btnBoardSettings.click();
        await this.modalSettings.waitForDisplayed();
    }

    public async fillModalSettings (name?: string, description?: string) {
        await this.modalSettingsTitle.waitForDisplayed();
        await this.modalSettingsTitle.setValue(name);
        await this.modalSettingsCreate.waitForDisplayed();
        await this.modalSettingsCreate.click();
    }

    public async openTagsModal () {
        await this.btnBoardTags.waitForDisplayed();
        await this.btnBoardTags.click();
        await this.modalTagList.waitForDisplayed();
    }

    public async addTag (name: string) {
        await this.modalTagAddTagButton.waitForDisplayed();
        await this.modalTagAddTagButton.click();

        await this.modalTagEdit.waitForDisplayed();
        await this.modalTagEditInput.waitForDisplayed();
        await this.modalTagEditInput.setValue(name);
        await this.modalTagEditButton.waitForDisplayed();
        await this.modalTagEditButton.click();
    }

    public async openInviteMemberModal () {
        await this.btnAddMember.waitForDisplayed();
        await this.btnAddMember.click();
        await this.modalContentInvite.waitForDisplayed();
    }

    public async searchInviteMemberModal (username: string) {
        await this.modalAddMemberInput.waitForDisplayed();
        await this.modalAddMemberInput.setValue(username);
        return await this.modalAddMemberSearchResultUsername.getText();
    }

    public async deleteCardListById (id: number | string) {
        const cardList = $(`[data-id="${id}"] .deleteCardList`);
        await cardList.waitForDisplayed();
        await cardList.click();
        await this.modalDeleteCardList.waitForDisplayed();
        await this.modalDeleteCardListButton.waitForDisplayed();
        await this.modalDeleteCardListButton.click();
    }

    public open () {
        // TODO - normal id
        return super.open('board/38');
    }
}

export default new BoardPage('https://brrrello.ru');
