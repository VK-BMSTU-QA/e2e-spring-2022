import Page from './page';

/**
 * Модальное окно тегов
 */
class SettingsModal extends Page {

    /**
     * Селекторы
     */

    public get btnBoardSettings () {
        return $('[id="showBoardSettingPopUpId"]');
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

    /**
     * Методы
     */

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
}

export default new SettingsModal('');
