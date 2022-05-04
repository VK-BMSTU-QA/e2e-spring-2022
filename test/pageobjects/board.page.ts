import {refresh} from 'utils/browser';
import {ChainablePromiseElement} from '../../node_modules/webdriverio/build/types';
import Page from './page';
import CardListModal from './cardlist.modal';
import TagModal from './tag.modal';
import MemberModal from './member.modal';
import SettingsModal from './settings.modal';

/**
 * Страница доски
 */
class BoardPage extends Page {

    /**
     * Элементы
     */

    public CardListModal = CardListModal
    public TagModal = TagModal
    public MemberModal = MemberModal
    public SettingsModal = SettingsModal

    /**
     * Селекторы
     */
    public get lblBoardName () {
        return $('.board-header__name');
    }

    public get modalDeleteCardList () {
        return $('.popup-content_delete');
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
