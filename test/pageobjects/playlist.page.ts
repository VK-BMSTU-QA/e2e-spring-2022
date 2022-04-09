import Page from './page';
import {URL} from '../../constants';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PlaylistPage extends Page {

    public get playlistAvatar () {
        return $('#content > div.playlist > div.playlist__description > div.playlist__description-avatar');
    }

    public get nameInput () {
        return $('#content > div.editwindow > div > div > form.editwindow__form > input');
    }

    public get saveBtn() {
        return $('#content > div.editwindow > div > div > form.editwindow__form > div.editwindow__form-buttons > input');
    }

    public get msgLabel() {
        return $('#content > div.editwindow > div > div > form.editwindow__form > div.editwindow__form-msg.form__fail_msg.success.visible');
    }

    public get closeMenuBtn() {
        return $('#content > div.editwindow > div > img');
    }

    public get playlistNameLabel() {
        return $('#content > div.playlist > div.playlist__description > div.playlist__description-text_block > div.playlist__description-title');
    }

    public async openEditMenu() {
        await this.playlistAvatar.waitForClickable();
        await this.playlistAvatar.click();
    }

    public async updatePlaylistName(newName: string) {
        await this.nameInput.waitForDisplayed();
        await this.nameInput.setValue(newName);
        await this.saveBtn.click();
        await this.msgLabel.waitForDisplayed();
    }

    public async closeEditMenu() {
        await this.closeMenuBtn.click();
    }

    public async getPlaylistName() {
        return this.playlistNameLabel.getText();
    }

    public open () {
        return super.open('playlist/198');
    }
}

export default new PlaylistPage(URL);
