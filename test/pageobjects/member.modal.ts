import Page from './page';

/**
 * Модальное окно участников доски
 */
class MemberModal extends Page {

    /**
     * Селекторы
     */

    public get btnAddMember () {
        return $('[id="showAddBoardMemberPopUpId"]');
    }

    public get modalContentInvite () {
        return $('.popup-content_invite');
    }

    public get modalAddMemberInput () {
        return $('[id="addUserPopUpSearchInputId"]');
    }

    // очень страшно, помогите
    public get modalAddMemberFirstSearchResultUsername () {
        return $('.user-name');
    }

    /**
     * Методы
     */

    public async openInviteMemberModal () {
        await this.btnAddMember.waitForDisplayed();
        await this.btnAddMember.click();
        await this.modalContentInvite.waitForDisplayed();
    }

    public async searchInviteMemberModal (username: string) {
        await this.modalAddMemberInput.waitForDisplayed();
        await this.modalAddMemberInput.setValue(username);
        await this.modalAddMemberFirstSearchResultUsername.waitForDisplayed();
        return await this.modalAddMemberFirstSearchResultUsername.getText();
    }

}

export default new MemberModal('');
