import Page from './page';

/**
 * Модальное окно тегов
 */
class TagModal extends Page {

    /**
     * Селекторы
     */

    public get btnBoardTags () {
        return $('[id="showTagsBoardPopUpId"]');
    }

    public get modalTagList () {
        return $('.popup-content_tag-list');
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

    /**
     * Методы
     */

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
}

export default new TagModal('');
