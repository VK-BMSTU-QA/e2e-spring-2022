import {refresh} from 'utils/browser';
import { ChainablePromiseElement } from '../../node_modules/webdriverio/build/types';
import Page from './page';

/**
 * Страница доски
 */
class BoardPage extends Page {
    /**
     * Селекторы
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

    public get divFirstColumn () {
        return $('.column');
    }

    public get divColumnFirstHeaderTitle () {
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
    public get modalAddMemberFirstSearchResultUsername () {
        return $('.user-name');
    }

    /**
     * Участник с юзернеймом на доске
     * @param {string} username 
     * @returns {ChainablePromiseElement<any>}
     */
    public testUsername (username: string): ChainablePromiseElement<any> {
        return $(`.board-header__members [title="${username}"]`);
    }

    /**
     * Получаем название доски
     * @returns Promise<string>
     */
    public async getBoardName(): Promise<string> {
        await this.lblBoardName.waitForDisplayed();
        return await this.lblBoardName.getText()
    }

    /////////////////////////////////////////////////////////////////
    // Модальное окно создания колонки
    /////////////////////////////////////////////////////////////////

    /**
     * Открываем модальное окно создания колонки
     */
    public async openCreateCardListModal () {
        await this.btnCreateCardList.waitForDisplayed();
        await this.btnCreateCardList.click();
        await this.modalCreateCardList.waitForDisplayed();
    }

    /**
     * Заполняем модальное окно создания колонки
     * @param {string} title заголовок колонки
     */
    public async fillmodalCreateCardList (title: string) {
        await this.modalCreateCardListTitle.waitForDisplayed();
        await this.modalCreateCardListTitle.setValue(title);
        await this.modalCreateCardListCreate.waitForDisplayed();
        await this.modalCreateCardListCreate.click();
    }

    /**
     * Получаем заголовок первой колонки
     * @returns Promise<string>
     */
    public async getFirstColumnTitle (): Promise<string> {
        await this.divColumnFirstHeaderTitle.waitForDisplayed();
        return await this.divColumnFirstHeaderTitle.getText();
    }

    /**
     * Получаем data-id первой колонки
     * @returns Promise<string>
     */
    public async getFirstColumnDataId () : Promise<string> {
        await this.divFirstColumn.waitForDisplayed();
        return await this.divFirstColumn.getAttribute('data-id');
    }

    /////////////////////////////////////////////////////////////////
    // Модальное окно настроек доски
    /////////////////////////////////////////////////////////////////

    public async openBoardSettingsModal () {
        await this.btnBoardSettings.waitForDisplayed();
        await this.btnBoardSettings.click();
        await this.modalSettings.waitForDisplayed();
    }

    public async fillModalSettings (name?: string) {
        await this.modalSettingsTitle.waitForDisplayed();
        await this.modalSettingsTitle.setValue(name);
        await this.modalSettingsCreate.waitForDisplayed();
        await this.modalSettingsCreate.click();
    }

    /////////////////////////////////////////////////////////////////
    // Модальное окно тегов
    /////////////////////////////////////////////////////////////////

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

    public async getFirstTagText (): Promise<string> {
        await this.modalTagName.waitForDisplayed();
        return await this.modalTagName.getText();
    }

    /////////////////////////////////////////////////////////////////
    // Модальное окно добавления пользователей в доску
    /////////////////////////////////////////////////////////////////

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

    /////////////////////////////////////////////////////////////////
    // Service
    /////////////////////////////////////////////////////////////////

    /**
     * Удаляем колонку по айди
     * @param {number | string} id айди колонки
     */
    public async deleteCardListById (id: number | string) {
        const cardList = $(`[data-id="${id}"] .deleteCardList`);
        await cardList.waitForDisplayed();
        await cardList.click();
        await this.modalDeleteCardList.waitForDisplayed();
        await this.modalDeleteCardListButton.waitForDisplayed();
        await this.modalDeleteCardListButton.click();
    }

    /**
     * Открыть страницу
     * @returns Promise<string>
     */
    public open (): Promise<string> {
        // TODO - normal id
        return super.open('board/38');
    }

    /**
     * Обновить страницу
     */
    public refresh () {
        // вообще можно было browser.refresh, но он у меня не работал :с
        refresh();
    }
}

export default new BoardPage('https://brrrello.ru');
