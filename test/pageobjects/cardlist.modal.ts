import Page from './page';

/**
 * Модальное окно колонки
 */
class CardlistModal extends Page {

    /**
     * Селекторы
     */

    public get btnCreateCardList () {
        return $('[id="showCreateCardListPopUpId"]');
    }

    public get modalCreateCardList () {
        return $('.popup-content_card-list');
    }

    public get modalCreateCardListTitle () {
        return $('[id="cardListPopUpTitleId"]');
    }

    public get modalCreateCardListCreate () {
        return $('[id="cardListPopUpCreateBtnId"]');
    }

    /**
     * Методы
     */

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
}

export default new CardlistModal('');
