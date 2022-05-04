import Page from './page';
import {URL} from '../../constants';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PlaylistPage extends Page {

    public get playlistAvatar () {
        return $('.playlist__description-avatar');
    }

    public get nameInput () {
        return $('.editwindow__form-input');
    }

    public get saveBtn() {
        return $('.editwindow__form-submit');
    }

    public get msgLabel() {
        return $('.editwindow__form-msg');
    }

    public get closeMenuBtn() {
        return $('.editwindow__close');
    }

    public get playlistNameLabel() {
        return $('.playlist__description-title');
    }

    public async openEditMenu() {
        await this.playlistAvatar.waitForClickable();
        await this.playlistAvatar.click();
    }

    public async updatePlaylistName(newName: string) {
        await this.nameInput.waitForDisplayed();
        await this.nameInput.setValue(newName);
        await this.saveBtn.waitForClickable();
        await this.saveBtn.click();
        await this.msgLabel.waitForDisplayed();
    }

    public async closeEditMenu() {
        await this.closeMenuBtn.waitForClickable();
        await this.closeMenuBtn.click();
    }

    public async getPlaylistName() {
        await this.playlistNameLabel.waitForDisplayed();
        return this.playlistNameLabel.getText();
    }

    public open (path: string) {
        return super.open(`playlist/${path}`);
    }
}

export default new PlaylistPage(URL);
